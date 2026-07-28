import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Gaitas Anauco",
  description: "Información transparente sobre el uso de cookies en el sitio web de Gaitas Anauco.",
};

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-[#0A0A2A] text-gray-200 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gaitas-orange hover:underline text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <Cookie className="w-8 h-8 text-gaitas-yellow" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Política de Cookies</h1>
          </div>
          <p className="text-gray-400 text-sm">Información detallada sobre el uso de cookies en nuestro sitio web.</p>
        </div>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">1. ¿Qué es una Cookie?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario al visitarlo. Su función principal es recordar información sobre su visita, como su idioma preferido o las opciones de consentimiento.
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">2. Tipos de Cookies que utilizamos</h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
            <div>
              <h3 className="font-bold text-white text-lg">Cookies Técnicas y Estrictamente Necesarias</h3>
              <p className="text-sm text-gray-300">
                Son esenciales para permitir la navegación por el sitio web y el uso de sus opciones (por ejemplo, guardar tu preferencia sobre el banner de cookies o mantener la sesión de administración). No requieren consentimiento del usuario.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h3 className="font-bold text-white text-lg">Cookies de Preferencia (LocalStorage)</h3>
              <p className="text-sm text-gray-300">
                Utilizamos el almacenamiento local (`localStorage`) para recordar tus preferencias de privacidad (`gaitas_cookie_consent`) de modo que no aparezca el aviso en cada visita.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">3. Cómo Administrar o Desactivar las Cookies</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador web:
          </p>
          <ul className="list-disc list-inside bg-white/5 p-4 rounded-xl space-y-2 border border-white/10 text-sm">
            <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
            <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
            <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad &amp; Seguridad.</li>
            <li><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
