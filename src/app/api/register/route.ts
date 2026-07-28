import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { sendRegistrationNotification } from "@/lib/sendEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellidos, email, telefono, comentario } = body;

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
