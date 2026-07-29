import { Track } from "@/types/audio";

/**
 * CONFIGURACIÓN DE VÍDEOS / CANCIONES DE GAITAS ANAUCO
 * 
 * Para añadir o modificar canciones, edita este arreglo:
 * - `title`: Nombre de la canción.
 * - `youtubeId`: ID del vídeo de YouTube (ej. de https://youtu.be/GXa8Mk9ehh0 usa "GXa8Mk9ehh0").
 * - `artist`: Artista o agrupación (por defecto "Gaitas Anauco").
 * - `album`: Nombre del álbum o evento.
 * - `description`: Descripción corta para la tarjeta.
 * - `duration`: Duración del vídeo (opcional).
 * - `coverUrl`: Imagen de portada (por defecto usa la miniatura oficial de YouTube en HD).
 */
export const GAITAS_ANAUCO_TRACKS: Track[] = [
  {
    id: "track-1",
    title: "Prefiero mi gaita / Las cosas buenas",
    artist: "Gaitas Anauco",
    album: "Gaita Zuliana",
    youtubeId: "GXa8Mk9ehh0",
    duration: "En Vivo",
    description: "Popurrí tradicional de gaita zuliana interpretado en vivo por Gaitas Anauco.",
    coverUrl: "https://img.youtube.com/vi/GXa8Mk9ehh0/hqdefault.jpg"
  },
  {
    id: "track-2",
    title: "La piñata",
    artist: "Gaitas Anauco",
    album: "Gaita Zuliana",
    youtubeId: "SajNXTt-cVc",
    duration: "En Vivo",
    description: "Sabor, tambor y furro con el clásico La piñata por Gaitas Anauco en Barcelona.",
    coverUrl: "https://img.youtube.com/vi/SajNXTt-cVc/hqdefault.jpg"
  },
  {
    id: "track-3",
    title: "La philco",
    artist: "Gaitas Anauco",
    album: "Gaita Zuliana",
    youtubeId: "Es-Z3-O7G5Y",
    duration: "En Vivo",
    description: "Inconfundible ritmo gaitero y tradición con La philco.",
    coverUrl: "https://img.youtube.com/vi/Es-Z3-O7G5Y/hqdefault.jpg"
  },
  {
    id: "track-4",
    title: "La parabólica",
    artist: "Gaitas Anauco",
    album: "Gaita Zuliana",
    youtubeId: "Zjck4lWa7T0",
    duration: "En Vivo",
    description: "El contagioso tema La parabólica interpretado por Gaitas Anauco.",
    coverUrl: "https://img.youtube.com/vi/Zjck4lWa7T0/hqdefault.jpg"
  }
];
