# Plan de Desarrollo para el Sitio Web de "Gaitas Anauco"

## 1. Visión y Objetivos
* **Nombre:** Gaitas Anauco.
* **Identidad:** Grupo de venezolanos residentes en Barcelona, España, dedicados a mantener viva la cultura de la Gaita Zuliana.
* **Objetivos del Sitio:**
    * Transmisión de alegría, modernidad y la "calidez caribeña".
    * Alta velocidad de carga (Pila JAMstack).
    * Captación de leads (formulario público).
    * Panel de administración para gestionar registros (CRUD).
    * Uso gratuito y comercial (Supabase Free Tier).
    * Seguridad estricta.

## 2. Estructura de Archivos y Recursos
* **Directorio de Trabajo:** `Website Anauco/`
* **Ruta de Recursos (Assets):** El logotipo principal se encuentra en el directorio `Logos/` (específicamente `Logos/gaitasnauco nuevo png.jpg`). 
* *Nota para Antigravity / Next.js:* Durante el andamiaje del proyecto, el directorio `Logos/` deberá ser mapeado o trasladado dentro de la carpeta `public/` (ej. `public/Logos/`) para que el framework pueda servir la imagen estática correctamente.

## 3. Estética y Diseño
* **Logo Principal:** Uso exclusivo de la imagen proporcionada en la carpeta `Logos`.
* **Fondo:** Un degradado radial o lineal suave que vaya de un **azul cian profundo** a un **morado berenjena oscuro**. Este fondo oscuro y frío será el lienzo que haga resaltar los colores cálidos del logo.
* **Colores de Acento:** Tomar los tonos vibrantes del logo (naranja, amarillo y rojo) para botones, iconos, y estados de *hover*.
* **Tipografía:** Sans-serif limpia y moderna para el cuerpo; una fuente de acento ligeramente más orgánica o lúdica para los subtítulos.
* **Vistosidad:** Uso de animaciones sutiles en la carga (fades) y efectos de *glow* (resplandor) en elementos de acento cálidos contra el fondo oscuro.

## 4. Pila Tecnológica
* **Framework:** Next.js (con directorio `/app`).
* **Diseño:** Tailwind CSS.
* **Base de Datos y Backend-as-a-Service:** Supabase (Capa gratuita).
* **Seguridad y Validación:**
    * Validación de Formularios: React Hook Form + Zod.
    * Base de Datos: Políticas de Row Level Security (RLS).
* **Iconografía:** Lucide React.

## 5. Estructura del Sitio Web
### 5.1. Zona Pública (Single Page Application)
* **Hero Section:** Fondo de degradado azul-morado. Logo referenciado desde `public/Logos/` renderizado grande y centrado. Botón de llamado a la acción "Regístrate para más info" en color naranja/rojo vibrante.
* **Sobre Nosotros:** Texto sobre la historia del grupo.
* **Actividades:** Cuadrícula de tarjetas modernas para eventos.
* **Registro:** Formulario simple, elegante y seguro.

### 5.2. Zona Privada (Dashboard de Administración `/admin`)
* **Autenticación:** Página de login (`/admin/login`) integrada con Supabase Auth.
* **Panel de Gestión (`/admin/dashboard`):** Tabla de datos con búsqueda en tiempo real, filtros, paginación y funciones CRUD (Ver, Editar, Eliminar) exclusivas para el administrador.

## 6. Requisitos de Seguridad (Detallado)
* **Sanitización:** Todos los campos del formulario público sanitizados y validados con Zod antes de su envío.
* **RLS de Supabase:** La base de datos debe tener políticas que permitan `INSERT` a usuarios anónimos pero restrinjan estrictamente `SELECT`, `UPDATE` y `DELETE` al rol `authenticated`.
* **Variables de Entorno:** Archivo `.env.local` configurado para ocultar las llaves de Supabase.
