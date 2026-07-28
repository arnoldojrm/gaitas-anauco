import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-black/40 border-t border-white/10 py-12 px-4 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Gaitas Anauco Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              Gaitas <span className="text-gaitas-orange">Anauco</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-sm">
            Difundiendo la cultura, alegría y tradición de la Gaita Zuliana en Barcelona y España.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <Link href="/aviso-legal" className="hover:text-gaitas-orange transition-colors">
            Aviso Legal
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/politica-de-privacidad" className="hover:text-gaitas-orange transition-colors">
            Política de Privacidad
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/politica-de-cookies" className="hover:text-gaitas-orange transition-colors">
            Política de Cookies
          </Link>
        </div>

        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Gaitas Anauco. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
