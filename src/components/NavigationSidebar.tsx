"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, User, Calendar, Info } from "lucide-react";

export function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-black/90 border-l border-gaitas-orange/30 shadow-[-10px_0_30px_rgba(255,127,80,0.15)] z-50 overflow-y-auto"
          >
            <div className="p-8">
              {/* Encabezado del Menú */}
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow to-gaitas-orange">Menú Principal</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Cerrar Menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sección Próximos Eventos */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-gaitas-cyan" />
                  <h3 className="text-xl font-semibold text-white">Próximos Eventos</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gaitas-cyan/50 transition-colors">
                    <h4 className="font-bold text-lg text-white mb-1">Bajada de furros 2026</h4>
                    <p className="text-gaitas-cyan text-sm font-medium mb-3">domingo 15 de diciembre 2026</p>
                    <div className="flex items-center gap-2 text-xs text-gaitas-yellow bg-gaitas-yellow/10 w-max px-3 py-1.5 rounded-full">
                      <Info className="w-3 h-3" /> Entradas disponibles próximamente
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gaitas-cyan/50 transition-colors">
                    <h4 className="font-bold text-lg text-white mb-1">Gaitazo 2026</h4>
                    <p className="text-gaitas-cyan text-sm font-medium mb-3">Viernes 4 de diciembre 2026</p>
                    <div className="flex items-center gap-2 text-xs text-gaitas-yellow bg-gaitas-yellow/10 w-max px-3 py-1.5 rounded-full">
                      <Info className="w-3 h-3" /> Entradas disponibles próximamente
                    </div>
                  </div>
                </div>
              </div>

              {/* Separador */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

              {/* Sección Contacto */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-gaitas-orange" />
                  <h3 className="text-xl font-semibold text-white">Contacto</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Responsable</p>
                      <p className="font-medium">Arnoldo Rodríguez</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Teléfono</p>
                      <a href="tel:688916120" className="font-medium hover:text-gaitas-orange transition-colors">688916120</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Correo</p>
                      <a href="mailto:arnoldo.rodriguez@gaitasanauco.com" className="font-medium hover:text-gaitas-orange transition-colors text-sm break-all">
                        arnoldo.rodriguez@gaitasanauco.com
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
