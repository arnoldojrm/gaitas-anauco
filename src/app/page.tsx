import Image from "next/image";
import { RegistrationForm } from "@/components/RegistrationForm";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { NavigationSidebar } from "@/components/NavigationSidebar";
import { MusicSection } from "@/components/AudioPlayer/MusicSection";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { Music, MapPin, Users, CalendarHeart, Calendar, Clock, Info, Ticket } from "lucide-react";

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

        {/* Botón discreto Ver Próximos Conciertos */}
        <div className="absolute top-6 right-20 sm:top-7 sm:right-24 z-20">
          <a
            href="#eventos"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm text-white glow-orange bg-gradient-to-r from-gaitas-orange to-gaitas-red transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
          >
            Ver Próximos Conciertos
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-0 pb-6 px-4 text-center relative overflow-hidden z-10 -mt-36 sm:-mt-52">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaitas-orange/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaitas-cyan/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-4 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/logo.png"
              alt="Gaitas Anauco Logo"
              fill
              className="object-contain drop-shadow-[0_0_25px_rgba(255,127,80,0.4)]"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            Siente el calor de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow via-gaitas-orange to-gaitas-red">Gaita Zuliana</span> en Barcelona
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
            Somos Gaitas Anauco, un grupo apasionado por mantener vivas nuestras raíces venezolanas, llenando de alegría y calidez caribeña cada rincón de España.
          </p>
        </div>
      </section>

      {/* Nuestros Momentos (Carrusel de fotos) */}
      <PhotoCarousel />

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

        <div className="flex flex-col gap-8">
          {/* Concierto 1 */}
          <div className="relative group bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 sm:p-8 rounded-3xl backdrop-blur-md hover:border-gaitas-orange/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,127,80,0.25)] flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-gaitas-cyan bg-gaitas-cyan/10 px-3 py-1.5 rounded-full border border-gaitas-cyan/30">
                    Barcelona 2026
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">Celebrando la Feria de la Chinita</h3>
                </div>
                <CalendarHeart className="w-10 h-10 text-gaitas-orange group-hover:scale-110 transition-transform shrink-0 md:hidden" />
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  ¡Siente el calor de la gaita zuliana y acompáñanos a honrar a nuestra patrona, la Virgen de Chiquinquirá! Gaitas Anauco te invita a un viaje de vuelta a casa, una tarde donde la devoción y la alegría inconfundible del sabor caribeño se unen en un solo sentir.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Prepárate para vibrar con nuestras raíces venezolanas al ritmo del cuatro, el furruco, la tambora y la charrasca. Será un encuentro inolvidable para compartir nuestra esencia, cantar a todo pulmón y sentirnos más cerca de nuestra tierra. ¡Ven y apoya nuestras tradiciones y cultura!
                </p>
              </div>
            </div>

            <div className="md:w-80 shrink-0 bg-black/20 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-gaitas-yellow shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Domingo, 15 de noviembre</div>
                    <div className="text-sm">A partir de las 17:00 h</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-gaitas-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Sala La Nau</div>
                    <div className="text-sm">C/Àlaba 30, 08005, Barcelona</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <Ticket className="w-5 h-5 text-gaitas-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Entradas: 20€</div>
                  </div>
                </div>
              </div>

              <a href="https://entradium.com" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 text-sm text-[#0A0A2A] bg-gaitas-yellow border border-gaitas-yellow hover:bg-white hover:border-white hover:text-[#0A0A2A] px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <Ticket className="w-4 h-4 shrink-0" /> Comprar Entradas
              </a>
            </div>
          </div>

          {/* Concierto 2 */}
          <div className="relative group bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 sm:p-8 rounded-3xl backdrop-blur-md hover:border-gaitas-orange/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,127,80,0.25)] flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-gaitas-cyan bg-gaitas-cyan/10 px-3 py-1.5 rounded-full border border-gaitas-cyan/30">
                    Barcelona 2026
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">Gran Gaitazo 2026</h3>
                </div>
                <CalendarHeart className="w-10 h-10 text-gaitas-red group-hover:scale-110 transition-transform shrink-0 md:hidden" />
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  ¡Despide el año con el auténtico sabor zuliano y toda la energía vibrante de Gaitas Anauco! Prepárate para una noche espectacular llena de alegría y calidez caribeña, donde los tambores, la charrasca, el furruco y el cuatro marcarán el ritmo de nuestra parranda más querida.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Más que un concierto, esta noche será el gran reencuentro de nuestra familia extendida en Europa. Ven a cantar tus temas favoritos, a bailar sin parar y a revivir la pasión de nuestras raíces venezolanas en una fiesta que te hará sentir de viaje de vuelta a casa. ¡No dejes que te lo cuenten!
                </p>
              </div>
            </div>

            <div className="md:w-80 shrink-0 bg-black/20 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-gaitas-yellow shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Viernes, 4 de diciembre</div>
                    <div className="text-sm">21:00 h</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-gaitas-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Sala La Nau</div>
                    <div className="text-sm">Barcelona</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <Ticket className="w-5 h-5 text-gaitas-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Entrada General: 25€</div>
                  </div>
                </div>
              </div>

              <a href="#registro" className="w-full inline-flex items-center justify-center gap-2 text-sm text-white bg-white/10 border border-white/20 hover:bg-white/20 px-6 py-3 rounded-xl font-bold transition-colors">
                <Info className="w-4 h-4 shrink-0" /> Entradas próximamente
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Música y Vídeos */}
      <MusicSection />

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

      {/* Galería de Actividades */}
      <GallerySection />

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
