"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/data/galleryImages";
import { CategoryFilter, GalleryImage } from "@/types/gallery";
import { LightboxModal } from "./LightboxModal";
import { Camera, Maximize2, Sparkles } from "lucide-react";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("todas");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filtrar imágenes según la pestaña activa
  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (activeCategory === "todas") return true;
    return img.category === activeCategory;
  });

  const handleOpenLightbox = (imgId: string) => {
    const index = filteredImages.findIndex((img) => img.id === imgId);
    if (index !== -1) {
      setSelectedImageIndex(index);
    }
  };

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "todas", label: "Todas" },
    { id: "conciertos", label: "Conciertos Barcelona" },
    { id: "ensayos", label: "Ensayos & Tradición" },
    { id: "especiales", label: "Especiales" },
  ];

  return (
    <section id="galeria" className="w-full max-w-6xl mx-auto px-4 py-20 scroll-mt-24 relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gaitas-orange/10 border border-gaitas-orange/30 text-gaitas-orange text-sm font-semibold mb-4">
          <Camera className="w-4 h-4" /> Fotogalería de Eventos
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Galería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow via-gaitas-orange to-gaitas-red">Actividades</span>
        </h2>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
          Explora la pasión, la música y los momentos inolvidables de Gaitas Anauco en España.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 backdrop-blur-md border ${
                isActive
                  ? "bg-gradient-to-r from-gaitas-orange to-gaitas-red text-white border-gaitas-orange shadow-[0_0_20px_rgba(255,127,80,0.35)] scale-105"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Image Grid (1 col mobile, 2 sm, 3 lg) */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpenLightbox(img.id)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-gaitas-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,127,80,0.25)] hover:scale-105"
            >
              {/* Image Component with Lazy Loading */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gaitas-yellow bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {img.categoryLabel}
                </span>
              </div>

              {/* Center Hover Action Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-12 h-12 rounded-full bg-gaitas-orange/90 text-white flex items-center justify-center shadow-xl backdrop-blur-md scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-base font-bold text-white group-hover:text-gaitas-yellow transition-colors line-clamp-1">
                  {img.title}
                </h4>
                {img.date && (
                  <p className="text-xs text-gray-300 font-medium mt-0.5">{img.date}</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={selectedImageIndex !== null}
        images={filteredImages}
        currentIndex={selectedImageIndex ?? 0}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={(newIndex) => setSelectedImageIndex(newIndex)}
      />
    </section>
  );
}
