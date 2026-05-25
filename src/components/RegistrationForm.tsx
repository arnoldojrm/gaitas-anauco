"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Debe ser un email válido"),
  telefono: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      // Por ahora simularemos la respuesta o la enviaremos al API de Supabase localmente
      // Como estamos enviando desde el cliente de forma directa o vía API route:
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
      <div className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center animate-in fade-in zoom-in duration-500">
        <CheckCircle className="w-16 h-16 text-gaitas-yellow mb-4" />
        <h3 className="text-2xl font-bold mb-2">¡Registro Exitoso!</h3>
        <p className="text-gray-300">Gracias por unirte a Gaitas Anauco. Te contactaremos pronto.</p>
      </div>
    );
  }

  return (
    <form suppressHydrationWarning onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
      <div suppressHydrationWarning>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">Nombre *</label>
        <input
          {...register("nombre")}
          type="text"
          id="nombre"
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500"
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
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500"
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
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500"
          placeholder="tu@email.com"
          data-lpignore="true"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div suppressHydrationWarning>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label>
        <input
          {...register("telefono")}
          type="tel"
          id="telefono"
          className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-gaitas-orange focus:ring-1 focus:ring-gaitas-orange outline-none transition-all placeholder:text-gray-500"
          placeholder="+34 600 000 000"
          data-lpignore="true"
        />
      </div>

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
