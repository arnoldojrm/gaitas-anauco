import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { sendRegistrationNotification } from "@/lib/sendEmail";
import { z } from "zod";

// Esquema de validación estricta Zod para la entrada de registro de usuarios
const registrationSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo")
    .regex(/^[^\r\n]+$/, "El nombre no puede contener saltos de línea"),
  apellidos: z
    .string()
    .trim()
    .min(2, "Los apellidos deben tener al menos 2 caracteres")
    .max(100, "Los apellidos son demasiado largos")
    .regex(/^[^\r\n]+$/, "Los apellidos no pueden contener saltos de línea"),
  email: z
    .string()
    .trim()
    .email("Formato de correo electrónico no válido")
    .toLowerCase()
    .regex(/^[^\r\n]+$/, "El correo electrónico no puede contener saltos de línea"),
  telefono: z
    .string()
    .trim()
    .min(6, "El número de teléfono debe tener al menos 6 dígitos")
    .max(30, "El teléfono no debe superar 30 caracteres")
    .regex(/^[^\r\n]+$/, "El teléfono no puede contener saltos de línea"),
  comentario: z
    .string()
    .trim()
    .max(1000, "El comentario no debe superar los 1000 caracteres")
    .optional()
    .or(z.literal("")),
  // Validación estricta del consentimiento de Política de Privacidad (RGPD) en servidor
  politica: z
    .boolean({ message: "Debes aceptar la Política de Privacidad" })
    .refine((val) => val === true, {
      message: "Debes aceptar la Política de Privacidad para continuar",
    }),
  // Campo Honeypot anti-bot
  website: z.string().optional(),
});

// In-Memory Rate Limiting (Máximo 5 envíos por IP cada 10 minutos)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    // Obtener IP del cliente para Rate Limiting
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Has alcanzado el límite de intentos. Por favor espera unos minutos." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validación estricta con Zod (RGPD, Header Injection & prevención de spam)
    const validation = registrationSchema.safeParse(body);

    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message || "Datos del formulario no válidos.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { nombre, apellidos, email, telefono, comentario, website } = validation.data;

    // Trampa anti-bot Honeypot: si el campo 'website' fue completado por un bot, simular éxito silencioso
    if (website && website.trim().length > 0) {
      console.warn(`[Anti-Spam] Bot detectado en formulario desde IP: ${clientIp}`);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const cleanComentario = comentario ? comentario.trim() : "";

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    if (supabaseUrl.includes("placeholder")) {
      console.log("[Modo Demo Local] Registro recibido:", { nombre, apellidos, email, telefono, comentario: cleanComentario });
      await sendRegistrationNotification({ nombre, apellidos, email, telefono, comentario: cleanComentario });
      return NextResponse.json({ success: true, demo: true }, { status: 200 });
    }

    const supabase = await createClient();

    // Intentar insertar en la tabla 'registros'
    let insertResult = await supabase
      .from("registros")
      .insert([{ nombre, apellidos, email, telefono, comentario: cleanComentario || null }]);

    // Si la columna 'comentario' aún no existe en Supabase, reintentar sin ella
    if (insertResult.error && (insertResult.error.code === "PGRST204" || insertResult.error.message.includes("comentario"))) {
      console.warn("Columna 'comentario' no encontrada en Supabase. Reintentando inserción básica...");
      insertResult = await supabase
        .from("registros")
        .insert([{ nombre, apellidos, email, telefono }]);
    }

    if (insertResult.error) {
      console.error("Supabase error:", insertResult.error);
      return NextResponse.json(
        { error: "No se pudo procesar la solicitud. Por favor intenta más tarde." },
        { status: 500 }
      );
    }

    // Enviar notificación por correo con manejo silencioso de errores
    try {
      await sendRegistrationNotification({ nombre, apellidos, email, telefono, comentario: cleanComentario });
    } catch (emailErr) {
      console.error("Error al enviar notificación por correo:", emailErr);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
