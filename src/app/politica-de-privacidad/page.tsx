import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Gaitas Anauco",
  description: "Política de privacidad y protección de datos conforme al RGPD (UE 2016/679) y LOPDGDD de Gaitas Anauco.",
};

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-[#0A0A2A] text-gray-200 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gaitas-orange hover:underline text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <Lock className="w-8 h-8 text-gaitas-yellow" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Política de Privacidad</h1>
          </div>
          <p className="text-gray-400 text-sm">Protección de Datos conforme al Reglamento General de Protección de Datos (RGPD UE 2016/679) y la LOPDGDD 3/2018 de España.</p>
        </div>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">1. Responsable del Tratamiento de Datos</h2>
          <p>
            El responsable del tratamiento de los datos personales recogidos en este sitio web es <strong>Gaitas Anauco</strong>, con domicilio de contacto en Barcelona, España, y correo electrónico: <a href="mailto:info@gaitasanauco.com" className="text-gaitas-orange hover:underline">info@gaitasanauco.com</a>.
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">2. Finalidad del Tratamiento de los Datos</h2>
          <p>
            Los datos personales proporcionados a través del formulario de registro (nombre, apellidos, email y teléfono) se tratarán con las siguientes finalidades:
          </p>
          <ul className="list-disc list-inside bg-white/5 p-4 rounded-xl space-y-2 border border-white/10">
            <li>Responder a consultas enviadas por el usuario.</li>
            <li>Gestionar la suscripción a novedades, conciertos, presentaciones y eventos culturales de Gaitas Anauco.</li>
            <li>Gestionar solicitudes para formar parte del grupo musical o colaborar en actividades.</li>
          </ul>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">3. Legitimación para el Tratamiento</h2>
          <p>
            La base legal para el tratamiento de sus datos es el <strong>consentimiento explícito</strong> prestado por el usuario al marcar la casilla de aceptación de la Política de Privacidad antes de enviar el formulario de registro (Art. 6.1.a RGPD).
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">4. Conservación de Datos</h2>
          <p>
            Los datos personales se conservarán mientras se mantenga la relación de comunicación con el usuario o hasta que solicite su supresión. Posteriormente, se conservarán durante los plazos legalmente previstos.
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">5. Destinatarios y Seguridad</h2>
          <p>
            Tus datos no serán cedidos a terceros, salvo obligación legal. Los datos son almacenados en infraestructura de base de datos segura protegida por cifrado y políticas estricta de Row Level Security (RLS) en Supabase.
          </p>
        </section>

        <section className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-white">6. Derechos del Usuario (ARCO+)</h2>
          <p>
            Como usuario, tienes derecho a ejercer en cualquier momento los siguientes derechos reconocidos por el RGPD:
          </p>
          <ul className="list-disc list-inside bg-white/5 p-4 rounded-xl space-y-2 border border-white/10">
            <li><strong>Acceso:</strong> Consultar qué datos personales disponemos de ti.</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
            <li><strong>Supresión ("Derecho al Olvido"):</strong> Solicitar el borrado de tus datos.</li>
            <li><strong>Oposición y Limitación:</strong> Oponerte al tratamiento o solicitar la limitación de su uso.</li>
            <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado y de lectura mecánica.</li>
          </ul>
          <p>
            Para ejercer estos derechos, basta con enviar un correo electrónico a <a href="mailto:info@gaitasanauco.com" className="text-gaitas-orange hover:underline font-semibold">info@gaitasanauco.com</a> indicando en el asunto "Ejercicio de Derechos RGPD".
          </p>
        </section>
      </div>
    </main>
  );
}
