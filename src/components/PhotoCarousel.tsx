"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const images = [
  "/media/20231008_202715.jpg",
  "/media/DSC_1882.jpg",
  "/media/_GUS4966.jpg",
  "/media/_GUS5038.jpg",
  "/media/_GUS5156.jpg",
  "/media/DSC_2072.jpg",
  "/media/_GUS5201.jpg",
  "/media/bajada-de-furros-psd.jpg",
  "/media/_GUS5199.jpg",
  "/media/_GUS4975.jpg"
];

export function PhotoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="w-full py-24 overflow-hidden relative" ref={containerRef}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gaitas-purple/30 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Nuestros Momentos</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gaitas-yellow via-gaitas-orange to-gaitas-red mx-auto rounded-full" />
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Revive la energía, la música y la pasión que compartimos en cada evento.</p>
      </motion.div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gaitas-blue to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gaitas-blue to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 px-6 cursor-grab active:cursor-grabbing"
          animate={{ x: [0, -1035] }} // Adjust based on content width roughly
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          // Pause on hover hack using CSS via Tailwind group-hover on parent
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: "paused" }} // Doesn't perfectly pause framer-motion x animation usually, better to use CSS
        >
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={index}
              className="relative w-72 h-96 sm:w-80 sm:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-white/10"
              whileHover={{ 
                scale: 1.05, 
                zIndex: 20,
                boxShadow: "0 0 30px 5px rgba(255, 127, 80, 0.5)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`Evento de Gaitas Anauco ${index}`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
