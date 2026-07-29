"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { Track, VideoContextType } from "@/types/audio";
import { GAITAS_ANAUCO_TRACKS } from "@/data/tracks";

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [tracks] = useState<Track[]>(GAITAS_ANAUCO_TRACKS);
  const [currentTrack, setCurrentTrack] = useState<Track>(GAITAS_ANAUCO_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMiniPlayerActive, setIsMiniPlayerActive] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(100);
  
  const playerRef = useRef<any>(null);
  const userInteractedRef = useRef<boolean>(false);

  // Sincronización con Media Session API para teclado/pantalla de bloqueo
  useEffect(() => {
    if (typeof window !== "undefined" && "mediaSession" in navigator && currentTrack) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack.title,
        artist: currentTrack.artist,
        album: currentTrack.album || "Gaitas Anauco",
        artwork: [
          { src: currentTrack.coverUrl, sizes: "480x360", type: "image/jpeg" },
        ],
      });

      navigator.mediaSession.setActionHandler("play", () => {
        if (playerRef.current && typeof playerRef.current.playVideo === "function") {
          playerRef.current.playVideo();
        }
        setIsPlaying(true);
      });

      navigator.mediaSession.setActionHandler("pause", () => {
        if (playerRef.current && typeof playerRef.current.pauseVideo === "function") {
          playerRef.current.pauseVideo();
        }
        setIsPlaying(false);
      });

      navigator.mediaSession.setActionHandler("previoustrack", () => {
        prevTrack();
      });

      navigator.mediaSession.setActionHandler("nexttrack", () => {
        nextTrack();
      });
    }
  }, [currentTrack]);

  // Detector de Scroll (IntersectionObserver) para cambiar automáticamente a Mini-Player
  useEffect(() => {
    if (typeof window === "undefined") return;

    const musicSection = document.getElementById("musica-section");
    if (!musicSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Si la sección principal de música no está visible en el viewport y el usuario está/estuvo reproduciendo
        if (!entry.isIntersecting && (isPlaying || userInteractedRef.current)) {
          setIsMiniPlayerActive(true);
        } else if (entry.isIntersecting) {
          setIsMiniPlayerActive(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(musicSection);

    return () => {
      observer.disconnect();
    };
  }, [isPlaying]);

  const onPlayerReady = (player: any) => {
    playerRef.current = player;
    if (player && typeof player.setVolume === "function") {
      player.setVolume(volume);
    }
  };

  const onPlayerStateChange = (event: any) => {
    // YT.PlayerState: 1 = PLAYING, 2 = PAUSED, 0 = ENDED
    if (event.data === 1) {
      setIsPlaying(true);
      userInteractedRef.current = true;
    } else if (event.data === 2) {
      setIsPlaying(false);
    } else if (event.data === 0) {
      // Al terminar el vídeo, reproducir el siguiente automáticamente
      nextTrack();
    }
  };

  const playTrack = (track: Track) => {
    userInteractedRef.current = true;
    if (track.id !== currentTrack.id) {
      setCurrentTrack(track);
      if (playerRef.current && typeof playerRef.current.loadVideoById === "function") {
        playerRef.current.loadVideoById(track.youtubeId);
        playerRef.current.playVideo();
      }
    } else {
      togglePlay();
    }
  };

  const togglePlay = () => {
    userInteractedRef.current = true;
    if (!playerRef.current) return;
    
    if (isPlaying) {
      if (typeof playerRef.current.pauseVideo === "function") {
        playerRef.current.pauseVideo();
      }
      setIsPlaying(false);
    } else {
      if (typeof playerRef.current.playVideo === "function") {
        playerRef.current.playVideo();
      }
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    const next = tracks[nextIndex];
    setCurrentTrack(next);
    userInteractedRef.current = true;
    if (playerRef.current && typeof playerRef.current.loadVideoById === "function") {
      playerRef.current.loadVideoById(next.youtubeId);
      playerRef.current.playVideo();
    }
  };

  const prevTrack = () => {
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    const prev = tracks[prevIndex];
    setCurrentTrack(prev);
    userInteractedRef.current = true;
    if (playerRef.current && typeof playerRef.current.loadVideoById === "function") {
      playerRef.current.loadVideoById(prev.youtubeId);
      playerRef.current.playVideo();
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (playerRef.current && typeof playerRef.current.setVolume === "function") {
      playerRef.current.setVolume(newVolume);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        tracks,
        currentTrack,
        isPlaying,
        isMiniPlayerActive,
        volume,
        playTrack,
        togglePlay,
        nextTrack,
        prevTrack,
        setVolume,
        setIsMiniPlayerActive,
        onPlayerReady,
        onPlayerStateChange,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useAudio debe ser usado dentro de un AudioProvider");
  }
  return context;
}
