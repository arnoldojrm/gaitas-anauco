export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { startSupabaseKeepAlive } = await import("@/lib/supabaseKeepAlive");
    startSupabaseKeepAlive();
  }
}
