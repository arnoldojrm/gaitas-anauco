export type CategoryFilter = "todas" | "conciertos" | "ensayos" | "especiales";

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: "conciertos" | "ensayos" | "especiales";
  categoryLabel: string;
  alt: string;
  date?: string;
}
