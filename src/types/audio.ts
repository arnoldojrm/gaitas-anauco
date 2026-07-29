export interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  youtubeId: string;
  duration: string;
  description: string;
  coverUrl: string;
}

export interface VideoContextType {
  tracks: Track[];
  currentTrack: Track;
  isPlaying: boolean;
  isMiniPlayerActive: boolean;
  volume: number;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (volume: number) => void;
  setIsMiniPlayerActive: (active: boolean) => void;
  onPlayerReady: (player: any) => void;
  onPlayerStateChange: (event: any) => void;
}
