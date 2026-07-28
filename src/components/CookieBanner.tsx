"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gaitas_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gaitas_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("gaitas_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-[#0F0F38]/95 border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-lg z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3 mb-3">
        <Cookie className="w-6 h-6 text-gaitas-orange flex-shrink-0 mt-0.5" />
        <div className="flex-1 text-sm text-gray-300 leading-relaxed">
          <p className="font-semibold text-white mb-1">Uso de Cookies</p>
          Utilizamos cookies esenciales para garantizar el correcto funcionamiento del sitio web y mejorar tu experiencia. Puedes consultar nuestra{" "}
          <Link href="/politica-de-cookies" className="text-gaitas-yellow underline hover:text-gaitas-orange">
            Política de Cookies
          </Link>.
        </div>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar banner de cookies"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-4 rounded-lg font-semibold text-xs text-white bg-gradient-to-r from-gaitas-orange to-gaitas-red hover:opacity-90 transition-all shadow-md"
        >
          Aceptar Todas
        </button>
        <button
          onClick={handleDecline}
          className="py-2 px-4 rounded-lg font-medium text-xs text-gray-300 bg-white/10 hover:bg-white/20 transition-all"
        >
          Rechazar No Esenciales
        </button>
      </div>
    </div>
  );
}
