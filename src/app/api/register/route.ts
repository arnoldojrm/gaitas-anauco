import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellidos, email, telefono } = body;

    if (!nombre || !apellidos || !email) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from("registros")
      .insert([{ nombre, apellidos, email, telefono }]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Error al guardar en la base de datos" },
        { status: 500 }
      );
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
