# Gaitas Anauco - Sitio Web Oficial

Sitio web oficial para **Gaitas Anauco**, grupo musical de venezolanos residentes en Barcelona, España.

## 🚀 Tecnologías

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Base de Datos & Auth:** Supabase
- **Notificaciones por Email:** Nodemailer (SMTP)
- **Cumplimiento Legal:** RGPD (UE 2016/679), LOPDGDD 3/2018 y LSSI-CE (Ley 34/2002)
- **Servidor Producción:** Ubuntu Server en Oracle Cloud (OCI) + PM2 + Nginx

---

## ⚙️ Configuración de Variables de Entorno

El proyecto requiere la configuración del archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Supabase (Base de datos y autenticación)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-de-supabase

# Correo de contacto público visible en la web
NEXT_PUBLIC_CONTACT_EMAIL=info@gaitasanauco.com

# Notificaciones por Correo Electrónico (SMTP)
SMTP_HOST=mail.gaitasanauco.com
SMTP_PORT=465
SMTP_USER=info@gaitasanauco.com
SMTP_PASS=tu_contraseña_smtp
EMAIL_TO=info@gaitasanauco.com
EMAIL_FROM="Gaitas Anauco" <info@gaitasanauco.com>
```

---

## 🛠️ Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar variables en `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Accede a `http://localhost:3000` (o `http://localhost:3001` si el puerto 3000 está ocupado).

---

## ⚖️ Páginas Legales y Protección de Datos

- **Aviso Legal:** `/aviso-legal`
- **Política de Privacidad:** `/politica-de-privacidad`
- **Política de Cookies:** `/politica-de-cookies`
- **Banner de Cookies:** Consentimiento almacenado en `localStorage`.
- **Formulario de Registro:** Validación obligatoria con Zod del consentimiento de la política de privacidad.

---

## 📦 Despliegue en Servidor Ubuntu (Oracle Cloud)

1. **Actualizar y compilar en el servidor:**
   ```bash
   cd gaitas-anauco
   git pull origin main
   npm install
   npm run build
   ```

2. **Gestión del servicio con PM2:**
   ```bash
   pm2 restart gaitas-anauco || pm2 start npm --name "gaitas-anauco" -- start
   ```

3. **Proxy inverso Nginx:**
   Asegúrate de que Nginx redirija el tráfico del puerto 80/443 a `http://localhost:3000` y mantén actualizado el certificado SSL con Certbot:
   ```bash
   sudo certbot --nginx -d gaitasanauco.com -d www.gaitasanauco.com
   ```
