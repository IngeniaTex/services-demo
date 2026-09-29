# Oficios Landing – Next.js

Plantilla de landing page (una sola página) para negocios de **oficios y construcción**: carpintería,
herrería, albañilería, remodelación, aluminio y vidrio, mantenimiento, etc. Paleta en tonos **acero y
azul industrial**. Derivada del sitio de **Ingeniatex** (Next.js 14 App Router, JavaScript, Bootstrap 5) y
reducida a las secciones que convierten en este giro.

El demo viene precargado con un negocio ficticio (**Taller de Herrería**, taller de aluminio y herrería en Mérida, Yucatán).

| Sección | Ancla | Componente |
|---|---|---|
| Hero + botones (presupuesto / WhatsApp) | `#inicio` | `components/pages/home/hero.jsx` |
| Cifras (proyectos, años, garantía…) | — | `components/pages/home/stats.jsx` |
| Nosotros | `#nosotros` | `components/pages/home/about.jsx` |
| Proceso de trabajo (4 pasos) | `#proceso` | `components/pages/home/process.jsx` |
| Servicios (grid desde `services-data`) | `#servicios`, `#servicio-<id>` | `components/pages/home/services.jsx` |
| ¿Por qué elegirnos? | `#por-que-elegirnos` | `components/pages/home/why-us.jsx` |
| Proyectos con filtro por categoría | `#proyectos` | `components/pages/home/projects.jsx` |
| Testimonios | `#testimonios` | `components/pages/home/testimonials.jsx` |
| Formulario de presupuesto + datos de contacto | `#cotizar` | `components/pages/home/quote.jsx` |
| CTA final | — | `components/pages/home/cta.jsx` |
| Footer | — | `components/layout/footer.jsx` |

Además: header con barra superior y menú sticky, menú móvil lateral, botón flotante de WhatsApp y
botón "volver arriba".

## Personalizar para un nuevo cliente

1. **Contenido** – edita únicamente `components/data/site.jsx` (nombre, contacto, WhatsApp, horario,
   redes, textos de cada sección, proyectos, testimonios, footer) y `components/data/services-data.jsx`
   (lista de servicios). Todos los componentes leen de esos dos archivos.
2. **Logo** – reemplaza `public/assets/img/logo/logo.svg` (header, fondo claro) y `logo-light.svg`
   (menú móvil y footer, fondo oscuro), o apunta `brand.logo` / `brand.logoLight` a tus archivos.
3. **Imágenes** – todas son placeholders SVG en `public/assets/img/` (`hero/`, `about/`, `why-us/`,
   `projects/`, `testimonials/`). Sustitúyelas por fotos reales (jpg/webp) y actualiza las rutas en
   `site.jsx`. Tamaños sugeridos: hero 800×960, nosotros 800×640 y 600×600, proyectos 800×600.
4. **Paleta** – todos los colores están en las variables `:root` al inicio de
   `public/assets/css/style.css`. Cambia `--primary-color-1` (azul) y `--steel-*` (acero) para
   adaptar el sitio a otro rubro sin tocar el resto del CSS.
5. **Mapa** – en Google Maps: Compartir → Insertar un mapa → copia el `src` del iframe en
   `contact.mapEmbed`. Vacío = no se muestra.
6. **Formulario** – no tiene backend: al enviar abre WhatsApp con el mensaje armado (nombre, teléfono,
   servicio, zona y detalles). Si el cliente prefiere correo, reemplaza `handleSubmit` en
   `quote.jsx` por un `fetch` a Formspree / EmailJS / una API route con Resend.
7. **SEO** – título, descripción y Open Graph salen de `brand.siteTitle` y `brand.description`
   (`app/layout.jsx` usa `export const metadata`). Favicon: `app/icon.svg`.

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificar antes de entregar
npm run start
npm run lint
```

## Estructura

```
app/
  layout.jsx            # fuentes (next/font), metadata, CSS global
  page.jsx              # única página → components/pages/home
  globals.css           # importa Bootstrap, Font Awesome Free y style.css
  icon.svg              # favicon
components/
  data/site.jsx         # TODO el contenido editable
  data/services-data.jsx# lista de servicios (menú, grid, filtro, formulario, footer)
  layout/               # header, header-menu (desktop), mobile-menu, footer
  common/               # section-title, whatsapp-button, whatsapp-float, scroll-to-top, social
  pages/home/           # index.jsx + una sección por archivo
public/assets/
  css/style.css         # estilos propios (variables de paleta al inicio)
  img/                  # placeholders SVG
```

## Créditos

Estructura y convenciones tomadas del sitio Ingeniatex (plantilla Bantec). Iconos: Font Awesome Free.
Fuentes: Barlow / Barlow Condensed (Google Fonts vía `next/font`).
