import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { AudioProvider } from "@/context/AudioContext";
import { PersistentPlayer } from "@/components/AudioPlayer/PersistentPlayer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaitas Anauco - Barcelona",
  description: "Siente el calor de la Gaita Zuliana en España. Eventos, música y tradiciones venezolanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col justify-between bg-[#0A0A2A] text-white">
        <AudioProvider>
          <div className="flex-grow">{children}</div>
          <Footer />
          <CookieBanner />
          <PersistentPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
