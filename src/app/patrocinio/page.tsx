import Image from "next/image";
import { NavigationSidebar } from "@/components/NavigationSidebar";
import { CalendarHeart, Star, MapPin, Ticket, Mic2, Megaphone, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function PatrocinioPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pb-20 relative">
      <NavigationSidebar />

      {/* Top Banner Decorativo */}
      <div className="w-full h-[30vh] sm:h-[40vh] min-h-[250px] relative z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A2A]" />
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gaitas-orange/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gaitas-cyan/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 mt-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            Propuesta de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow via-gaitas-orange to-gaitas-red">Patrocinio</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Únete a Gaitas Anauco y apoya la cultura venezolana en Barcelona. Sé parte de nuestros próximos grandes eventos.
          </p>
        </div>
      </div>

      {/* Eventos Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Nuestros Próximos Eventos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gaitas-orange to-gaitas-red rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Evento 1 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 sm:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gaitas-orange/10 rounded-bl-full blur-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <CalendarHeart className="w-8 h-8 text-gaitas-orange" />
              <span className="text-sm font-bold tracking-widest text-gaitas-orange bg-gaitas-orange/10 px-3 py-1 rounded-full border border-gaitas-orange/30 uppercase">
                15 de Noviembre
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Celebrando la Feria de la Chinita</h3>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <MapPin className="w-4 h-4 text-gaitas-cyan" />
              <span>Sala La Nau, Barcelona</span>
            </div>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              ¡Siente el calor de la gaita zuliana y acompáñanos a honrar a nuestra patrona, la Virgen de Chiquinquirá! Gaitas Anauco te invita a un viaje de vuelta a casa, una tarde donde la devoción y la alegría inconfundible del sabor caribeño se unen en un solo sentir. Prepárate para vibrar con nuestras raíces venezolanas al ritmo del cuatro, la tambora y la charrasca. Será un encuentro inolvidable para compartir nuestra esencia, cantar a todo pulmón y sentirnos más cerca de nuestra tierra. ¡Ven y apoya nuestras tradiciones y cultura!
            </p>
            <div className="mt-6 relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <Image 
                src="/media/cartel-chinita-2026.png" 
                alt="Afiche Oficial Feria de la Chinita" 
                fill 
                className="object-contain p-2" 
              />
            </div>
          </div>

          {/* Evento 2 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 sm:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gaitas-red/10 rounded-bl-full blur-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <CalendarHeart className="w-8 h-8 text-gaitas-red" />
              <span className="text-sm font-bold tracking-widest text-gaitas-red bg-gaitas-red/10 px-3 py-1 rounded-full border border-gaitas-red/30 uppercase">
                4 de Diciembre
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Gran Gaitazo</h3>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <MapPin className="w-4 h-4 text-gaitas-cyan" />
              <span>Sala La Nau, Barcelona</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Prepárate para el Gaitazo más grande del año para cerrar la temporada por todo lo alto.
            </p>
          </div>
        </div>
      </section>

      {/* Planes de Patrocinio */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Planes de Patrocinio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu marca y obtén visibilidad en nuestros conciertos. Los precios son por evento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Estandar */}
          <div className="bg-gradient-to-b from-white/5 to-white/5 border border-white/15 p-8 rounded-3xl backdrop-blur-md hover:border-gaitas-cyan/50 transition-all duration-300 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Estándar</h3>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gaitas-cyan to-blue-400">
                100€
              </div>
              <p className="text-sm text-gray-400 mt-2">Por evento</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Ticket className="w-5 h-5 text-gaitas-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>2 entradas</strong> al evento</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gaitas-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300">Mención en nuestras redes sociales</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-gaitas-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300">Presencia en el afiche del evento junto a otros patrocinantes estándar</span>
              </li>
              <li className="flex items-start gap-3">
                <Mic2 className="w-5 h-5 text-gaitas-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Difusión durante el evento:</strong> 3 pautas (Apertura, pausa intermedia y despedida)</span>
              </li>
            </ul>
          </div>

          {/* Plan Premium */}
          <div className="bg-gradient-to-b from-gaitas-orange/10 to-white/5 border border-gaitas-orange/40 p-8 rounded-3xl backdrop-blur-md relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,127,80,0.15)] flex flex-col h-full">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-gaitas-orange to-gaitas-red text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
              Recomendado
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow to-gaitas-orange">
                150€
              </div>
              <p className="text-sm text-gray-400 mt-2">Por evento</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Ticket className="w-5 h-5 text-gaitas-orange shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>4 entradas</strong> al evento</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gaitas-orange shrink-0 mt-0.5" />
                <span className="text-gray-300">Mención en nuestras redes sociales</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-gaitas-orange shrink-0 mt-0.5" />
                <span className="text-gray-300">Presencia <strong>destacada</strong> en el afiche del evento (solo tu logo)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mic2 className="w-5 h-5 text-gaitas-orange shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Difusión durante el evento:</strong> 3 pautas (Apertura, pausa intermedia y despedida)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Promoción Especial */}
        <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-gaitas-orange/20 via-gaitas-red/10 to-gaitas-orange/20 border border-gaitas-orange/40 rounded-3xl p-1 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />
           <div className="bg-[#0A0A2A]/80 backdrop-blur-xl rounded-[23px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gaitas-yellow/10 border border-gaitas-yellow/30 text-gaitas-yellow text-xs font-bold mb-3 uppercase tracking-widest">
                  <Megaphone className="w-4 h-4" /> Promoción Especial
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Pack Patrocinio Doble Premium</h3>
                <p className="text-gray-300 text-sm">
                  Sé patrocinante <strong className="text-gaitas-orange">Premium</strong> en <strong>AMBOS eventos</strong> (Feria de la Chinita + Gran Gaitazo) por un precio especial. Obtén todas las ventajas de la máxima exposición.
                </p>
             </div>
             <div className="text-center md:text-right shrink-0">
               <div className="text-sm text-gray-400 line-through mb-1">Valor real: 300€</div>
               <div className="text-4xl sm:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,127,80,0.5)]">
                 250€
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="w-full max-w-3xl mx-auto px-4 py-16 text-center relative z-10">
        <h2 className="text-2xl font-bold text-white mb-6">¿Te interesa ser patrocinante?</h2>
        <p className="text-gray-300 mb-8">
          Contáctanos directamente para asegurar tu espacio y formar parte de esta gran experiencia musical.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="tel:688916120" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-gaitas-cyan/50 transition-all w-full sm:w-auto justify-center group">
            <div className="w-10 h-10 rounded-full bg-gaitas-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-gaitas-cyan" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Llámanos</div>
              <div className="text-white font-bold text-lg">688 916 120</div>
            </div>
          </a>
          
          <a href="mailto:info@gaitasanauco.com" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-gaitas-orange/50 transition-all w-full sm:w-auto justify-center group">
            <div className="w-10 h-10 rounded-full bg-gaitas-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-gaitas-orange" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Escríbenos</div>
              <div className="text-white font-bold text-lg">info@gaitasanauco.com</div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
