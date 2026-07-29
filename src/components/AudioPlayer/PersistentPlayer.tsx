"use client";

import React from "react";
import Image from "next/image";
import { useAudio } from "@/context/AudioContext";
import { Play, Pause, SkipBack, SkipForward, X, Maximize2, Volume2, VolumeX } from "lucide-react";

export function PersistentPlayer() {
  const {
    currentTrack,
    isPlaying,
    isMiniPlayerActive,
    volume,
    togglePlay,
    nextTrack,
    prevTrack,
    setVolume,
    setIsMiniPlayerActive,
  } = useAudio();

  if (!isMiniPlayerActive || !currentTrack) return null;

  const scrollToMusicSection = () => {
    const el = document.getElementById("musica");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[300px] sm:w-[360px] bg-[#0A0A2A]/95 border border-white/20 backdrop-blur-2xl rounded-3xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] border-gaitas-orange/30 animate-in fade-in slide-in-from-bottom-5 duration-300">
      
      {/* Header Controls (Expand & Close) */}
      <div className="flex items-center justify-between mb-3 text-gray-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gaitas-orange animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-gaitas-orange">Vídeo en Reproducción</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={scrollToMusicSection}
            title="Volver a la sección de vídeo"
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMiniPlayerActive(false)}
            title="Cerrar mini reproductor"
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mini Video / Thumbnail & Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-black border border-white/10">
          <Image
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            fill
            className="object-cover"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="flex items-end gap-0.5 h-4">
                <span className="w-1 bg-gaitas-yellow animate-[bounce_0.6s_infinite_100ms] rounded-full h-full" />
                <span className="w-1 bg-gaitas-orange animate-[bounce_0.6s_infinite_200ms] rounded-full h-full" />
                <span className="w-1 bg-gaitas-red animate-[bounce_0.6s_infinite_300ms] rounded-full h-full" />
              </div>
            </div>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <h4 className="text-sm font-bold text-white truncate">{currentTrack.title}</h4>
          <p className="text-xs text-gaitas-orange font-medium truncate">{currentTrack.artist}</p>
          <span className="text-[10px] text-gray-400 font-semibold">{currentTrack.duration}</span>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        
        {/* Prev / Play / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevTrack}
            className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-gradient-to-r from-gaitas-orange to-gaitas-red text-white shadow-md hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white ml-0.5" />
            )}
          </button>

          <button
            onClick={nextTrack}
            className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2 text-gray-400">
          <button
            onClick={() => setVolume(volume === 0 ? 100 : 0)}
            className="hover:text-white transition-colors"
          >
            {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-gaitas-orange"
          />
        </div>
      </div>
    </div>
  );
}
