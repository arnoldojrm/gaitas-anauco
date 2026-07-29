"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryImage } from "@/types/gallery";
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    const newIndex = (currentIndex + 1) % images.length;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  // Soporte para navegación con teclado (Flecha Izq, Flecha Der, ESC)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Bloquear scroll de fondo mientras el modal está abierto
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Contenido del Modal */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-between overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Lightbox */}
            <div className="w-full flex items-center justify-between mb-4 px-2 text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold bg-gaitas-orange/20 text-gaitas-orange px-3 py-1 rounded-full border border-gaitas-orange/40">
                  {currentIndex + 1} / {images.length}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-gaitas-yellow" />
                  {currentImage.categoryLabel}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                aria-label="Cerrar vista ampliada"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Imagen Principal Animada */}
            <div className="relative w-full h-[55vh] sm:h-[70vh] flex items-center justify-center">
              <motion.div
                key={currentImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Controles de Navegación (Flechas Izquierda / Derecha) */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-gaitas-orange text-white transition-all border border-white/20 hover:scale-110 shadow-lg"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-gaitas-orange text-white transition-all border border-white/20 hover:scale-110 shadow-lg"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Footer / Descripción */}
            <div className="w-full mt-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {currentImage.title}
              </h3>
              {currentImage.date && (
                <p className="text-xs text-gaitas-yellow flex items-center justify-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5" /> {currentImage.date}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
