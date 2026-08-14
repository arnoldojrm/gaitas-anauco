import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // Verificación de secreto opcional si está configurado CRON_SECRET en el entorno
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret) {
      const { searchParams } = new URL(request.url);
      const authHeader = request.headers.get("authorization");
      const providedSecret = searchParams.get("secret") || (authHeader ? authHeader.replace("Bearer ", "") : null);

      if (providedSecret !== cronSecret) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 });
      }
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    if (!supabaseUrl || supabaseUrl.includes("placeholder")) {
      return NextResponse.json(
        {
          status: "ok",
          mode: "demo",
          message: "Modo demo local: Supabase URL no configurado o es un placeholder",
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    }

    const supabase = await createClient();

    // Consulta ultraligera (head: true solo cuenta filas sin traer datos)
    const { count, error } = await supabase
      .from("registros")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("[Keep-Alive] Error en consulta a Supabase:", error);
      return NextResponse.json(
        {
          status: "error",
          error: error.message,
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        status: "ok",
        message: "Ping a Supabase realizado con éxito",
        registrosCount: count ?? 0,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Keep-Alive] Error inesperado en el servidor:", err);
    return NextResponse.json(
      { error: "Error interno en la ejecución de keep-alive" },
      { status: 500 }
    );
  }
}
