"use client";

import React from "react";
import Image from "next/image";
import { useAudio } from "@/context/AudioContext";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { Play, Pause, Music, Sparkles, Volume2, ChevronRight, Video } from "lucide-react";

export function MusicSection() {
  const { tracks, currentTrack, isPlaying, playTrack, togglePlay } = useAudio();

  return (
    <section id="musica" className="w-full max-w-6xl mx-auto px-4 py-20 scroll-mt-24 relative z-10">
      <div id="musica-section" className="space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gaitas-orange/10 border border-gaitas-orange/30 text-gaitas-orange text-sm font-semibold mb-4">
            <Music className="w-4 h-4" /> Repertorio en Vivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nuestra Música en <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaitas-yellow via-gaitas-orange to-gaitas-red">Vídeo</span>
          </h2>
          <p className="text-gray-300 text-lg mt-4 leading-relaxed">
            Siente la energía y la alegría de Gaitas Anauco. Escucha y mira nuestras mejores presentaciones directamente desde Barcelona.
          </p>
        </div>

        {/* Video Player & Playlist Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main YouTube Video Player Container (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative p-2 sm:p-3 rounded-3xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 backdrop-blur-xl shadow-[0_0_50px_rgba(255,127,80,0.15)] transition-all">
              <YouTubeEmbed />
            </div>

            {/* Current Video Info */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs uppercase font-bold tracking-widest text-gaitas-cyan bg-gaitas-cyan/10 px-3 py-1 rounded-full border border-gaitas-cyan/30">
                  {currentTrack.album || "Gaitas Anauco"}
                </span>
                <a
                  href={`https://www.youtube.com/watch?v=${currentTrack.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <Video className="w-4 h-4 text-red-500" /> Ver en YouTube
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {currentTrack.title}
              </h3>
              <p className="text-sm text-gaitas-yellow font-medium">{currentTrack.artist}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{currentTrack.description}</p>
            </div>
          </div>

          {/* Playlist Column (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gaitas-yellow" /> Selección de Vídeos
              </h4>
              <span className="text-xs font-semibold text-gray-400">4 Canciones</span>
            </div>

            <div className="space-y-3">
              {tracks.map((track, idx) => {
                const isActive = track.id === currentTrack.id;

                return (
                  <div
                    key={track.id}
                    onClick={() => playTrack(track)}
                    className={`group relative flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? "bg-gradient-to-r from-gaitas-orange/20 to-gaitas-red/20 border-gaitas-orange/50 shadow-[0_0_25px_rgba(255,127,80,0.25)]"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0 bg-black/40">
                      <Image
                        src={track.coverUrl}
                        alt={track.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                      {/* Play / Active Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {isActive && isPlaying ? (
                          <div className="w-8 h-8 rounded-full bg-gaitas-orange flex items-center justify-center shadow-lg text-white">
                            <Pause className="w-4 h-4 fill-white" />
                          </div>
                        ) : (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                            isActive ? "bg-gaitas-orange text-white" : "bg-black/60 text-white group-hover:scale-110"
                          }`}>
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Track Details */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-gray-400">0{idx + 1}</span>
                        {isActive && (
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-gaitas-orange text-white">
                            Sonando
                          </span>
                        )}
                      </div>
                      <h5 className={`text-base font-bold truncate transition-colors ${
                        isActive ? "text-gaitas-yellow" : "text-white group-hover:text-gaitas-orange"
                      }`}>
                        {track.title}
                      </h5>
                      <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                    </div>

                    {/* Track Duration */}
                    <div className="text-right shrink-0">
                      <span className="text-xs font-semibold text-gray-400">{track.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
