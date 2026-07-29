"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  apellidos: z.string().min(2, "Los apellidos son obligatorios"),
  email: z.string().email("Debe ser un email válido"),
  telefono: z.string().min(6, "El teléfono es obligatorio"),
  comentario: z.string().max(512, "El comentario no puede superar los 512 caracteres").optional(),
  politica: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
  website: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      comentario: "",
      website: "",
    },
  });

  // Temporizador de 10 segundos para ocultar el mensaje de éxito y mostrar de nuevo el formulario
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, reset]);

  const comentarioValue = watch("comentario") || "";

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Error al registrar");
      }

      setIsSuccess(true);
    } catch (error) {
      setErrorMsg("Ocurrió un error al enviar tu registro. Inténtalo de nuevo.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center animate-in fade-in zoom-in duration-500 min-h-[400px]">
        <CheckCircle className="w-16 h-16 text-gaitas-yellow mb-4" />
        <h3 className="text-2xl font-bold mb-2">¡Registro Exitoso!</h3>
        <p className="text-gray-300 mb-6">Gracias por unirte a Gaitas Anauco. Te contactaremos pronto.</p>
        <p className="text-xs text-gray-500 italic">Este mensaje se cerrará automáticamente en unos segundos...</p>
        <button
          onClick={() => {
            setIsSuccess(false);
            reset();
          }}
          className="mt-4 px-4 py-2 text-xs font-semibold text-gaitas-orange hover:text-white border border-gaitas-orange/30 hover:border-gaitas-orange rounded-lg transition-all"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form suppressHydrationWarning onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
      {/* Campo Honeypot Oculto (Anti-Spam Bot) */}
      <div className="absolute opacity-0 -z-10 w-0 h-0 pointer-events-none" aria-hidden="true">
        <input
          {...register("website")}
          type="text"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          placeholder="Dejar este campo vacío"
        />
      </div>

      <div suppressHydrationWarning>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">Nombre *</label>
        <input
          {...register("nombre")}
          type="text"
          id="nombre"
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500 text-white"
          placeholder="Tu nombre"
          data-lpignore="true"
        />
        {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>}
      </div>

      <div suppressHydrationWarning>
        <label htmlFor="apellidos" className="block text-sm font-medium text-gray-300 mb-1">Apellidos *</label>
        <input
          {...register("apellidos")}
          type="text"
          id="apellidos"
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500 text-white"
          placeholder="Tus apellidos"
          data-lpignore="true"
        />
        {errors.apellidos && <p className="text-red-400 text-xs mt-1">{errors.apellidos.message}</p>}
      </div>

      <div suppressHydrationWarning>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500 text-white"
          placeholder="tu@email.com"
          data-lpignore="true"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div suppressHydrationWarning>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">Teléfono *</label>
        <input
          {...register("telefono")}
          type="tel"
          id="telefono"
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500 text-white"
          placeholder="+34 600 000 000"
          data-lpignore="true"
        />
        {errors.telefono && <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>}
      </div>

      <div suppressHydrationWarning>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="comentario" className="block text-sm font-medium text-gray-300">
            ¿En qué te podemos ayudar?
          </label>
          <span className="text-xs text-gray-400">
            {comentarioValue.length}/512
          </span>
        </div>
        <textarea
          {...register("comentario")}
          id="comentario"
          rows={4}
          maxLength={512}
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500 text-white resize-none"
          placeholder="Cuéntanos el motivo de tu consulta, contratación o mensaje..."
        />
        {errors.comentario && <p className="text-red-400 text-xs mt-1">{errors.comentario.message}</p>}
      </div>

      <div suppressHydrationWarning className="mt-2 flex items-start gap-2">
        <input
          {...register("politica")}
          type="checkbox"
          id="politica"
          className="mt-1 w-4 h-4 rounded border-white/20 bg-black/30 text-gaitas-orange focus:ring-gaitas-orange accent-gaitas-orange cursor-pointer"
        />
        <label htmlFor="politica" className="text-xs text-gray-300 leading-normal cursor-pointer">
          He leído y acepto la{" "}
          <Link href="/politica-de-privacidad" target="_blank" className="text-gaitas-yellow underline hover:text-gaitas-orange">
            Política de Privacidad
          </Link>{" "}
          para el tratamiento de mis datos personales. *
        </label>
      </div>
      {errors.politica && <p className="text-red-400 text-xs">{errors.politica.message}</p>}

      {errorMsg && <p className="text-red-400 text-sm text-center mt-2">{errorMsg}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "mt-4 w-full py-4 rounded-lg font-bold text-lg text-white glow-orange bg-gradient-to-r from-gaitas-orange to-gaitas-red transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Registrarme Ahora"}
      </button>
    </form>
  );
}
