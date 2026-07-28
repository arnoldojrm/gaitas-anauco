# Plan de Desarrollo y Arquitectura para "Gaitas Anauco"

## 1. Visión y Objetivos
* **Nombre:** Gaitas Anauco.
* **Identidad:** Grupo de venezolanos residentes en Barcelona, España, dedicados a mantener viva la cultura de la Gaita Zuliana.
* **Objetivos del Sitio:**
    * Transmisión de alegría, modernidad y la "calidez caribeña".
    * Alta velocidad de carga (Pila JAMstack / Next.js App Router).
    * Captación de leads con confirmación explícita de privacidad (formulario público).
    * Notificación automática por correo electrónico a `info@gaitasanauco.com` tras cada registro.
    * Panel de administración para gestionar registros (CRUD).
    * Cumplimiento estricto con la Ley de Protección de Datos (RGPD / LOPDGDD) y LSSI-CE en España.

## 2. Estructura de Archivos y Recursos
* **Directorio de Trabajo:** `GaitasAnauco/`
* **Logotipos y Recursos:** Mapeados en `public/logo.png` y `public/media/`.

## 3. Estética y Diseño
* **Logo Principal:** Renderizado destacado en la Hero Section.
* **Fondo:** Degradado oscuro de cian profundo a morado berenjena.
* **Colores de Acento:** Tonos vibrantes del logo (naranja `#FF7F50`, amarillo y rojo).
* **Tipografía:** Sans-serif moderna (Geist).
* **Efectos:** Animaciones sutiles de entrada, degradados y resplandor (*glow*).

## 4. Pila Tecnológica
* **Framework:** Next.js (App Router).
* **Diseño:** Tailwind CSS.
* **Base de Datos & Auth:** Supabase (Capa gratuita).
* **Notificaciones por Email:** Nodemailer / SMTP.
* **Seguridad y Validación:**
    * Validación de Formularios: React Hook Form + Zod.
    * Base de Datos: Políticas de Row Level Security (RLS) en Supabase.
* **Iconografía:** Lucide React.
* **Infraestructura de Despliegue:** Servidor Ubuntu en Oracle Cloud Infrastructure (OCI) (Directorio: `web-gaitas`) + PM2 + Nginx.

## 5. Estructura del Sitio Web
### 5.1. Zona Pública
* **Hero Section:** Fondo degradado, logo en alta resolución y llamada a la acción.
* **Sobre Nosotros:** Historia de la agrupación en Barcelona.
* **Actividades / Galería:** Carrusel interactivo y tarjetas de próximos eventos.
* **Formulario de Registro:** Formulario seguro con casilla obligatoria de aceptación de Política de Privacidad.
* **Pie de Página (Footer):** Enlaces directos a las páginas legales.
* **Banner de Cookies:** Consentimiento interactivo guardado en `localStorage`.

### 5.2. Páginas Legales
* **Aviso Legal (`/aviso-legal`):** LSSI-CE Ley 34/2002.
* **Política de Privacidad (`/politica-de-privacidad`):** RGPD (UE 2016/679) y LOPDGDD 3/2018.
* **Política de Cookies (`/politica-de-cookies`):** Gestión transparente de cookies.

### 5.3. Zona Privada (`/admin`)
* **Autenticación (`/admin/login`):** Integrada con Supabase Auth.
* **Panel de Gestión (`/admin/dashboard`):** Tabla de datos interactiva para consultar y administrar registros.

## 6. Configuración de Entorno (.env.local)
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_CONTACT_EMAIL=info@gaitasanauco.com

SMTP_HOST=mail.gaitasanauco.com
SMTP_PORT=465
SMTP_USER=info@gaitasanauco.com
SMTP_PASS=...
EMAIL_TO=info@gaitasanauco.com
EMAIL_FROM="Gaitas Anauco" <info@gaitasanauco.com>
```
