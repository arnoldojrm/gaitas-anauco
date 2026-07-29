import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  if (supabaseUrl.includes("placeholder")) {
    return supabaseResponse;
  }

  // refreshing the auth token
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Si intentamos ir a cualquier ruta bajo /admin (salvo /admin/login) y no hay usuario, redirigir a /admin/login
    if (
      !user &&
      request.nextUrl.pathname.startsWith("/admin") &&
      !request.nextUrl.pathname.startsWith("/admin/login")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    // Si hay usuario autenticado y estamos en /admin/login, redirigir al dashboard
    if (
      user &&
      request.nextUrl.pathname.startsWith("/admin/login")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/dashboard";
      return NextResponse.redirect(url);
    }
  } catch {
    // Manejo silencioso de errores de sesión
  }

  return supabaseResponse;
}
