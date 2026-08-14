/**
 * Servicio interno de Keep-Alive para mantener activo el proyecto de Supabase.
 * Ejecuta una consulta periódica (cada 24 horas) directamente desde el proceso del servidor.
 */

declare global {
  // Guardar la referencia en globalThis para evitar duplicar intervalos en recargas calientes (HMR)
  // eslint-disable-next-line no-var
  var __supabaseKeepAliveTimer: NodeJS.Timeout | undefined;
}

export function startSupabaseKeepAlive() {
  if (globalThis.__supabaseKeepAliveTimer) {
    return; // Ya fue iniciado previamente en este proceso
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  if (!supabaseUrl || supabaseUrl.includes("placeholder")) {
    console.log("[Supabase Keep-Alive] Modo Demo Local: Omitiendo temporizador interno (URL no configurada).");
    return;
  }

  const ping = async () => {
    try {
      const endpoint = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/registros?select=id&limit=1`;
      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      });

      if (res.ok) {
        console.log(`[Supabase Keep-Alive] ✅ Ping automático exitoso (${new Date().toLocaleString("es-ES")})`);
      } else {
        console.warn(`[Supabase Keep-Alive] ⚠️ Respuesta no esperada: HTTP ${res.status}`);
      }
    } catch (err) {
      console.error("[Supabase Keep-Alive] ❌ Error al ejecutar el ping interno:", err);
    }
  };

  // 1. Ejecutar un ping inicial pasados 15 segundos del arranque del servidor
  setTimeout(() => {
    ping();
  }, 15000);

  // 2. Programar la ejecución recurrente cada 24 horas (86,400,000 ms)
  const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
  globalThis.__supabaseKeepAliveTimer = setInterval(ping, TWENTY_FOUR_HOURS);

  console.log("[Supabase Keep-Alive] 🚀 Servicio interno de Keep-Alive inicializado en el servidor (Intervalo: 24h).");
}
