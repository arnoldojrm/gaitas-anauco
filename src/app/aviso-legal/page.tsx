import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Gaitas Anauco",
  description: "Aviso legal y condiciones generales de uso del sitio web de Gaitas Anauco en Barcelona, España.",
};

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-[#0A0A2A] text-gray-200 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gaitas-orange hover:underline text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-8 h-8 text-gaitas-yellow" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Aviso Legal</h1>
          </div>
          <p className="text-gray-400 text-sm">Cumplimiento con la Ley LSSI-CE (Ley 34/2002) de España.</p>
        </div>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">1. Datos Identificativos del Titular</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular del sitio web:
          </p>
          <ul className="list-disc list-inside bg-white/5 p-4 rounded-xl space-y-2 border border-white/10">
            <li><strong>Denominación / Nombre:</strong> Gaitas Anauco</li>
            <li><strong>Ubicación:</strong> Barcelona, Cataluña, España</li>
            <li><strong>Correo electrónico de contacto:</strong> info@gaitasanauco.com</li>
            <li><strong>Actividad principal:</strong> Promoción cultural y actuaciones del grupo musical venezolano Gaitas Anauco.</li>
          </ul>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">2. Objeto y Condiciones de Uso</h2>
          <p>
            El presente Aviso Legal regula el acceso y la utilización del sitio web de Gaitas Anauco. La navegación por el sitio web le atribuye la condición de Usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">3. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo marcas, logotipos, imágenes, audios, diseños, códigos fuente y textos, están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución o modificación pública de cualquier contenido sin la autorización previa y por escrito del titular.
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">4. Exclusión de Responsabilidad</h2>
          <p>
            Gaitas Anauco no se hace responsable de los daños o perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos o desconexiones en el funcionamiento operativo de este sistema electrónico por causas ajenas al control del titular.
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">5. Legislación Aplicable y Jurisdicción</h2>
          <p>
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web, será de aplicación la legislación española, sometiéndose expresamente las partes a los Juzgados y Tribunales de la ciudad de Barcelona (España).
          </p>
        </section>
      </div>
    </main>
  );
}
