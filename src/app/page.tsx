import Image from "next/image";
import { RegistrationForm } from "@/components/RegistrationForm";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { NavigationSidebar } from "@/components/NavigationSidebar";
import { Music, MapPin, Users, CalendarHeart } from "lucide-react";

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
      <section className="w-full flex flex-col items-center justify-center pt-0 pb-16 px-4 text-center relative overflow-hidden z-10 -mt-20 sm:-mt-32">
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
          
          <a href="#registro" className="px-8 py-4 rounded-full font-bold text-lg text-white glow-orange bg-gradient-to-r from-gaitas-orange to-gaitas-red transition-all duration-300 hover:scale-105">
            Únete a la Familia
          </a>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Nuestra Historia</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gaitas-orange to-gaitas-red rounded-full" />
            <p className="text-gray-300 text-lg leading-relaxed">
              Nacidos de la nostalgia y el amor por nuestra tierra, Gaitas Anauco surgió como un punto de encuentro para venezolanos en Barcelona. No solo tocamos música; compartimos nuestra esencia, nuestras tradiciones y la alegría inconfundible del sabor caribeño.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Cada presentación es un viaje de vuelta a casa, una celebración donde los tambores, la charrasca, el furruco y el cuatro se unen para hacer vibrar los corazones de todos los que nos escuchan, sin importar de dónde vengan.
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
      <section id="registro" className="w-full max-w-md mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber más?</h2>
          <p className="text-gray-300">Regístrate para recibir información sobre nuestras próximas presentaciones, talleres y eventos.</p>
        </div>
        <RegistrationForm />
      </section>
    </main>
  );
}
