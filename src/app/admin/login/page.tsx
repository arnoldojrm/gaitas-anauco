import { login } from "./actions";
import { Lock } from "lucide-react";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gaitas-blue px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-gaitas-orange to-gaitas-red rounded-full flex items-center justify-center mb-4 glow-orange">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white text-center">Acceso Admin</h2>
        </div>

        <form action={login} className="space-y-6 flex flex-col">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500"
              name="email"
              placeholder="admin@gaitasanauco.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">Contraseña</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button className="w-full py-4 rounded-lg font-bold text-lg text-white bg-gradient-to-r from-gaitas-cyan to-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_15px_rgba(0,188,212,0.4)] hover:shadow-[0_0_25px_rgba(0,188,212,0.6)]">
            Entrar al Dashboard
          </button>
          
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-red-500/20 text-red-300 text-center rounded-lg text-sm border border-red-500/30">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
