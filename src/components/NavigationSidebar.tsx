"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, User, Calendar, FileText, Heart, Camera, Music } from "lucide-react";

export function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@gaitasanauco.com";

  return (
    <>
      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 bg-white/10 hover:bg-gaitas-orange/20 border border-white/20 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(255,127,80,0.3)] transition-all duration-300"
        aria-label="Abrir Menú"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Fondo oscuro al abrir */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* Menú Lateral */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#0A0A2A]/95 border-l border-gaitas-orange/30 shadow-[-10px_0_30px_rgba(255,127,80,0.15)] z-50 overflow-y-auto backdrop-blur-xl"
          >
            <div className="p-8 flex flex-col justify-between h-full min-h-[550px]">
              <div>
                {/* Encabezado del Menú */}
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow to-gaitas-orange">
                    Menú Principal
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Cerrar Menú"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Enlaces de Navegación Rápida */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Navegación</p>
                  
                  <a
                    href="#eventos"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gaitas-orange/50 hover:bg-white/10 transition-all text-white font-medium group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gaitas-orange/10 flex items-center justify-center border border-gaitas-orange/20 text-gaitas-orange group-hover:scale-110 transition-transform">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span>Próximos Conciertos</span>
                  </a>

                  <a
                    href="#musica"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gaitas-orange/50 hover:bg-white/10 transition-all text-white font-medium group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gaitas-orange/10 flex items-center justify-center border border-gaitas-orange/20 text-gaitas-orange group-hover:scale-110 transition-transform">
                      <Music className="w-5 h-5" />
                    </div>
                    <span>Música & Vídeos</span>
                  </a>

                  <a
                    href="#nosotros"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gaitas-yellow/50 hover:bg-white/10 transition-all text-white font-medium group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gaitas-yellow/10 flex items-center justify-center border border-gaitas-yellow/20 text-gaitas-yellow group-hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span>Nuestra Historia</span>
                  </a>

                  <a
                    href="#momentos"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gaitas-red/50 hover:bg-white/10 transition-all text-white font-medium group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gaitas-red/10 flex items-center justify-center border border-gaitas-red/20 text-gaitas-red group-hover:scale-110 transition-transform">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span>Nuestros Momentos</span>
                  </a>

                  <a
                    href="#registro"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gaitas-cyan/50 hover:bg-white/10 transition-all text-white font-medium group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gaitas-cyan/10 flex items-center justify-center border border-gaitas-cyan/20 text-gaitas-cyan group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span>Únete a la familia</span>
                  </a>
                </div>
              </div>

              {/* Sección Contacto */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <User className="w-5 h-5 text-gaitas-orange" />
                  <h3 className="text-lg font-bold text-white">Contacto</h3>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <User className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Responsable</p>
                      <p className="font-medium text-sm">Arnoldo Rodríguez</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Phone className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Teléfono</p>
                      <a href="tel:688916120" className="font-medium text-sm hover:text-gaitas-orange transition-colors">688916120</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Mail className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Correo</p>
                      <a href={`mailto:${contactEmail}`} className="font-medium hover:text-gaitas-orange transition-colors text-xs sm:text-sm break-all">
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
