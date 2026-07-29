"use client";

import React, { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function YouTubeEmbed({ className = "" }: { className?: string }) {
  const { currentTrack, onPlayerReady, onPlayerStateChange } = useAudio();
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    // Función para crear e inicializar el reproductor de YouTube
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player || !containerRef.current || initializedRef.current) return;

      initializedRef.current = true;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: currentTrack.youtubeId,
        playerVars: {
          autoplay: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            onPlayerReady(event.target);
          },
          onStateChange: (event: any) => {
            onPlayerStateChange(event);
          },
        },
      });
    };

    // Si la API de YouTube ya está cargada
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Si el script aún no está en el DOM, agregarlo
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      // Callback global cuando se descarga la API
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        initPlayer();
      };
    }
  }, []);

  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ${className}`}>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
