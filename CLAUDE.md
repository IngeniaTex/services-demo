# CLAUDE.md

Guía para Claude Code al trabajar en este repositorio.

## Proyecto

Plantilla de landing page de una sola página para negocios de oficios (carpintería, herrería,
construcción, remodelación…). Next.js 14 App Router, **JavaScript (`.jsx`), sin TypeScript, sin
backend**. Bootstrap 5 solo para grid/utilidades; los estilos son propios (`public/assets/css/style.css`)
con paleta acero/azul industrial (variables `--steel-*`, `--silver-*`, `--primary-*`). Contenido demo ficticio:
"Taller de Herrería", taller de aluminio y herrería (Mérida, Yucatán). Idioma: español (MX).

Sigue las convenciones del sitio Ingeniatex del que deriva: componentes funcionales con
`export default`, un componente por archivo, nombres kebab-case, clases BEM por sección
(`hero__content`, `services__card`…), `btn-one` / `btn-two` / `btn-three`, `subtitle-one`,
`whatsapp-button whatsapp-button--{filled|dark|outline}`, `section-padding`. Alias `@/` = raíz.

## Comandos

```bash
npm install
npm run dev      # localhost:3000
npm run build    # verificación obligatoria antes de dar por terminado un cambio
npm run lint
```

No hay tests. Verificación = `npm run build` sin errores + revisar en el navegador (desktop y móvil).
No correr `build` con `dev` activo (comparten `.next`).

## Dónde cambiar cada cosa

| Cambio | Archivo |
|---|---|
| Nombre, contacto, WhatsApp, horario, redes, textos de todas las secciones, proyectos, testimonios, footer | `components/data/site.jsx` — única fuente de verdad |
| Servicios (id, título, icono, descripción, features) | `components/data/services-data.jsx` — alimenta menú desktop/móvil, `#servicios`, filtro de proyectos, select del formulario y footer |
| Paleta de colores y fuentes | variables `:root` al inicio de `public/assets/css/style.css` |
| Orden / visibilidad de secciones | `components/pages/home/index.jsx` (comentar la línea para ocultar) |
| Menú desktop | `components/layout/header-menu.jsx` (items desde `site.nav`) |
| Menú móvil | `components/layout/mobile-menu.jsx` — mismos items; mantener sincronizados |
| Formulario | `components/pages/home/quote.jsx` — `handleSubmit` abre WhatsApp con el mensaje; ahí se conecta un backend si se pide |
| SEO (title/description/OG) | `app/layout.jsx` lee `site.brand`; favicon en `app/icon.svg` |
| Imágenes | `public/assets/img/*` (placeholders SVG); rutas en `site.jsx` |

## Reglas y trampas

- **No hardcodear textos en JSX**: todo contenido nuevo va a `site.jsx` / `services-data.jsx`.
- `app/layout.jsx` es Server Component (usa `export const metadata`). Solo llevan `"use client"` los
  componentes con hooks/eventos: `header`, `mobile-menu`, `services` (dispara evento), `projects`,
  `quote`, `scroll-to-top`. No agregues `"use client"` al layout.
- Preselección de servicio en el formulario: `services.jsx` emite `window.dispatchEvent(new CustomEvent("quote-service", { detail: id }))` y `quote.jsx` lo escucha. No usar `#cotizar?servicio=` (el hash no coincide con ningún id y no hace scroll).
- Los `id` de `services-data` se usan como ancla (`#servicio-<id>`), categoría de proyectos y valor del select: sin acentos, espacios ni mayúsculas.
- Anclas: `scroll-margin-top: var(--header-offset)` compensa el header fijo; si cambias la altura del header ajusta esa variable.
- Iconos: Font Awesome **Free** (`@fortawesome/fontawesome-free`) — solo `fas`, `far`, `fab`. No copiar el Font Awesome Pro de Ingeniatex.
- Imágenes con `<img src="/assets/img/...">` (rutas absolutas desde `public`), no `next/image`.
- Al terminar: `npm run build`; si tocaste menú o servicios, revisar desktop **y** móvil.
