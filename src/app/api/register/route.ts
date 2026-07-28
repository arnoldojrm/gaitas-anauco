import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { sendRegistrationNotification } from "@/lib/sendEmail";

// Sanitización básica de strings contra XSS e inyecciones de script
function sanitizeInput(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>?/gm, "").trim();
}

// In-Memory Rate Limiting (Máximo 5 envíos por IP cada 10 minutos)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutos
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
    let { nombre, apellidos, email, telefono, comentario } = body;

    // Sanitización de entradas contra XSS
    nombre = sanitizeInput(nombre);
    apellidos = sanitizeInput(apellidos);
    email = sanitizeInput(email).toLowerCase();
    telefono = sanitizeInput(telefono);
    comentario = comentario ? sanitizeInput(comentario).slice(0, 512) : "";

    // Los campos nombre, apellidos, email y teléfono DEBEN estar completados
    if (!nombre || !apellidos || !email || !telefono) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios (nombre, apellidos, email y teléfono) deben estar completados." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    if (supabaseUrl.includes("placeholder")) {
      console.log("[Modo Demo Local] Registro recibido:", { nombre, apellidos, email, telefono, comentario });
      await sendRegistrationNotification({ nombre, apellidos, email, telefono, comentario });
      return NextResponse.json({ success: true, demo: true }, { status: 200 });
    }

    const supabase = await createClient();

    // Intentar insertar incluyendo la columna 'comentario'
    let insertResult = await supabase
      .from("registros")
      .insert([{ nombre, apellidos, email, telefono, comentario: comentario || null }]);

    // Si falla porque la columna 'comentario' aún no existe en Supabase, reintentar sin 'comentario'
    if (insertResult.error && (insertResult.error.code === "PGRST204" || insertResult.error.message.includes("comentario"))) {
      console.warn("Columna 'comentario' no encontrada en Supabase. Reintentando inserción básica...");
      insertResult = await supabase
        .from("registros")
        .insert([{ nombre, apellidos, email, telefono }]);
    }

    if (insertResult.error) {
      console.error("Supabase error:", insertResult.error);
      return NextResponse.json(
        { error: "Error al guardar en la base de datos." },
        { status: 500 }
      );
    }

    // Enviar notificación por email incluyendo el comentario
    await sendRegistrationNotification({ nombre, apellidos, email, telefono, comentario });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
