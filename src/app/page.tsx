import Image from "next/image";
import { RegistrationForm } from "@/components/RegistrationForm";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { NavigationSidebar } from "@/components/NavigationSidebar";
import { Music, MapPin, Users, CalendarHeart, Calendar, Clock, Info } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between pb-20 relative">
      <NavigationSidebar />

      {/* Top Banner Image */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] min-h-[350px] max-h-[800px] relative z-0">
        <Image
          src="/media/20231008_202715.jpg"
          alt="Gaitas Anauco Evento"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Este degradado funde la imagen con el color azul oscuro exacto del fondo de la web */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#0A0A2A]/60 to-[#0A0A2A]" />
      </div>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-0 pb-12 px-4 text-center relative overflow-hidden z-10 -mt-20 sm:-mt-32">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaitas-orange/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaitas-cyan/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 mb-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/logo.png"
              alt="Gaitas Anauco Logo"
              fill
              className="object-contain drop-shadow-[0_0_25px_rgba(255,127,80,0.4)]"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
            Siente el calor de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow via-gaitas-orange to-gaitas-red">Gaita Zuliana</span> en Barcelona
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Somos Gaitas Anauco, un grupo apasionado por mantener vivas nuestras raíces venezolanas, llenando de alegría y calidez caribeña cada rincón de España.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#eventos" className="px-8 py-4 rounded-full font-bold text-lg text-white glow-orange bg-gradient-to-r from-gaitas-orange to-gaitas-red transition-all duration-300 hover:scale-105 shadow-xl">
              Ver Próximos Conciertos
            </a>
            <a href="#registro" className="px-8 py-4 rounded-full font-bold text-lg text-gray-200 border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Únete a la Familia
            </a>
          </div>
        </div>
      </section>

      {/* Próximos Conciertos / Eventos */}
      <section id="eventos" className="w-full max-w-6xl mx-auto px-4 py-16 relative z-10 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gaitas-cyan/10 border border-gaitas-cyan/30 text-gaitas-cyan text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" /> Próximas Presentaciones
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Próximos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow via-gaitas-orange to-gaitas-red">Conciertos</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-3 leading-relaxed">
            Acompáñanos a disfrutar del auténtico sabor zuliano en vivo. ¡Fechas confirmadas para nuestros próximos eventos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Concierto 1 */}
          <div className="relative group bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 rounded-3xl backdrop-blur-md hover:border-gaitas-orange/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,127,80,0.25)]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gaitas-cyan bg-gaitas-cyan/10 px-3 py-1.5 rounded-full border border-gaitas-cyan/30">
                  Barcelona 2026
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">Bajada de furros 2026</h3>
              </div>
              <CalendarHeart className="w-10 h-10 text-gaitas-orange group-hover:scale-110 transition-transform shrink-0" />
            </div>

            <div className="flex items-center gap-3 text-gray-300 mb-6 text-base sm:text-lg font-medium">
              <Clock className="w-5 h-5 text-gaitas-yellow shrink-0" />
              <span>Domingo, 15 de diciembre de 2026</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gaitas-yellow bg-gaitas-yellow/10 border border-gaitas-yellow/30 px-4 py-2 rounded-full font-medium">
                <Info className="w-4 h-4 shrink-0" /> Entradas disponibles próximamente
              </div>
              <a href="#registro" className="text-sm font-bold text-gaitas-orange hover:text-white transition-colors underline">
                Avisarme
              </a>
            </div>
          </div>

          {/* Concierto 2 */}
          <div className="relative group bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 rounded-3xl backdrop-blur-md hover:border-gaitas-orange/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,127,80,0.25)]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gaitas-cyan bg-gaitas-cyan/10 px-3 py-1.5 rounded-full border border-gaitas-cyan/30">
                  Barcelona 2026
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">Gaitazo 2026</h3>
              </div>
              <CalendarHeart className="w-10 h-10 text-gaitas-red group-hover:scale-110 transition-transform shrink-0" />
            </div>

            <div className="flex items-center gap-3 text-gray-300 mb-6 text-base sm:text-lg font-medium">
              <Clock className="w-5 h-5 text-gaitas-yellow shrink-0" />
              <span>Viernes, 4 de diciembre de 2026</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gaitas-yellow bg-gaitas-yellow/10 border border-gaitas-yellow/30 px-4 py-2 rounded-full font-medium">
                <Info className="w-4 h-4 shrink-0" /> Entradas disponibles próximamente
              </div>
              <a href="#registro" className="text-sm font-bold text-gaitas-orange hover:text-white transition-colors underline">
                Avisarme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="w-full max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Nuestra Historia</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gaitas-orange to-gaitas-red rounded-full" />
            <p className="text-gray-300 text-lg leading-relaxed">
              Nacidos de la nostalgia y el amor por nuestra tierra, Gaitas Anauco surgió en <strong>Barcelona, España</strong> como un punto de encuentro para la comunidad venezolana y amantes de la cultura caribeña en Europa. No solo tocamos música; compartimos nuestra esencia, nuestras tradiciones y la alegría inconfundible del sabor zuliano.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Desde <strong>Barcelona, España</strong>, cada presentación es un viaje de vuelta a casa, una celebración donde los tambores, la charrasca, el furruco y el cuatro se unen para hacer vibrar los corazones de todos los que nos escuchan, sin importar de dónde vengan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Users className="w-10 h-10 text-gaitas-cyan mb-4" />
              <h3 className="font-bold text-xl mb-2">Comunidad</h3>
              <p className="text-sm text-gray-400">Más que un grupo, somos una familia extendida en Europa.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors mt-8">
              <Music className="w-10 h-10 text-gaitas-orange mb-4" />
              <h3 className="font-bold text-xl mb-2">Música</h3>
              <p className="text-sm text-gray-400">El ritmo auténtico de la Gaita Zuliana en cada acorde.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <MapPin className="w-10 h-10 text-gaitas-yellow mb-4" />
              <h3 className="font-bold text-xl mb-2">Barcelona</h3>
              <p className="text-sm text-gray-400">Nuestro hogar actual, donde compartimos nuestra cultura.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors mt-8">
              <CalendarHeart className="w-10 h-10 text-gaitas-red mb-4" />
              <h3 className="font-bold text-xl mb-2">Eventos</h3>
              <p className="text-sm text-gray-400">Llevamos la alegría de nuestras tradiciones a todas partes.</p>
            </div>
          </div>
        </div>
      </section>

      <PhotoCarousel />

      {/* Registro */}
      <section id="registro" className="w-full max-w-md mx-auto px-4 py-20 scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber más?</h2>
          <p className="text-gray-300">Regístrate para recibir información sobre nuestras próximas presentaciones, talleres y eventos.</p>
        </div>
        <RegistrationForm />
      </section>
    </main>
  );
}
