// Única fuente de verdad del contenido del sitio.
// Para adaptar la plantilla a un nuevo cliente edita este archivo (y services-data.jsx);
// no hace falta tocar los componentes.

// WhatsApp: número en formato internacional sin "+" ni espacios y mensaje prellenado
// que usan todos los botones (hero, CTA, contacto, flotante y formulario).
const whatsappNumber = "529997488654";
const whatsappMessage = "Me interesa cotizar esa pagina web para mi negocio";

const site = {
  brand: {
    name: "Taller Roble",
    tagline: "Carpintería · Herrería · Construcción",
    siteTitle: "Taller Roble | Carpintería, Herrería y Construcción en Mérida",
    description:
      "Taller Roble: carpintería a la medida, herrería, construcción y remodelación en Mérida, Yucatán. Presupuesto sin costo, garantía por escrito y entrega puntual.",
    logo: "/assets/img/logo/logo.svg",
    logoLight: "/assets/img/logo/logo-light.svg",
    foundedYear: 2009,
  },

  contact: {
    phone: "+52 999 748 8654",
    phoneHref: "tel:+529997488654",
    whatsappNumber,
    whatsappMessage,
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    email: "contacto@tallerroble.mx",
    address: "Calle 60 #123, Col. Centro, Mérida, Yucatán",
    serviceArea: "Mérida y alrededores (Progreso, Kanasín, Umán, Conkal)",
    hours: [
      { days: "Lunes a viernes", time: "8:00 – 18:00" },
      { days: "Sábado", time: "8:00 – 14:00" },
      { days: "Domingo", time: "Cerrado" },
    ],
    // Google Maps > Compartir > Insertar un mapa > copia el src del iframe. Vacío = sin mapa.
    mapEmbed: "",
  },

  social: [
    { id: "facebook", label: "Facebook", href: "https://facebook.com", icon: "fab fa-facebook-f" },
    { id: "instagram", label: "Instagram", href: "https://instagram.com", icon: "fab fa-instagram" },
    { id: "tiktok", label: "TikTok", href: "https://tiktok.com", icon: "fab fa-tiktok" },
  ],

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#cotizar" },
  ],

  hero: {
    subtitle: "Más de 15 años construyendo confianza",
    title: "Carpintería, herrería y construcción hechas a la medida",
    text:
      "Fabricamos, instalamos y construimos con materiales de calidad y acabados que duran. Visitamos tu casa o negocio, te damos presupuesto sin costo y cumplimos la fecha de entrega.",
    primaryCta: { label: "Solicitar presupuesto", href: "#cotizar" },
    image: "/assets/img/hero/hero.svg",
    badge: { value: "+15", label: "años de experiencia" },
    rating: { value: "4.9", count: "+120 reseñas de clientes" },
  },

  stats: [
    { value: "+850", label: "Proyectos entregados", icon: "fas fa-hammer" },
    { value: "+15", label: "Años de experiencia", icon: "fas fa-medal" },
    { value: "100%", label: "Garantía por escrito", icon: "fas fa-file-signature" },
    { value: "24 h", label: "Respuesta a cotizaciones", icon: "fas fa-stopwatch" },
  ],

  about: {
    subtitle: "Sobre nosotros",
    title: "Un taller familiar con oficio, palabra y herramienta",
    text:
      "Somos un equipo de maestros carpinteros, herreros y albañiles con más de 15 años trabajando en Mérida. Nos gusta el trabajo bien hecho: medimos, cotizamos claro, fabricamos con materiales de primera y entregamos cuando dijimos.",
    points: [
      "Presupuesto detallado sin costo",
      "Materiales de calidad y proveedores locales",
      "Garantía por escrito en cada trabajo",
      "Limpieza y orden al terminar la obra",
    ],
    images: ["/assets/img/about/about-1.svg", "/assets/img/about/about-2.svg"],
    owner: { name: "Juan Pérez", role: "Fundador y maestro carpintero" },
    cta: { label: "Conoce nuestros servicios", href: "#servicios" },
  },

  process: {
    subtitle: "Nuestro proceso",
    title: "Así trabajamos contigo",
    steps: [
      {
        title: "Visita y medición",
        text: "Vamos a tu domicilio o negocio, tomamos medidas y escuchamos lo que necesitas.",
        icon: "fas fa-ruler-combined",
      },
      {
        title: "Presupuesto claro",
        text: "Te enviamos una cotización detallada por WhatsApp en menos de 24 horas.",
        icon: "fas fa-file-invoice-dollar",
      },
      {
        title: "Fabricación u obra",
        text: "Trabajamos en taller o en sitio con materiales de calidad y avances por foto.",
        icon: "fas fa-tools",
      },
      {
        title: "Instalación y entrega",
        text: "Instalamos, limpiamos y te entregamos con garantía por escrito.",
        icon: "fas fa-clipboard-check",
      },
    ],
  },

  whyUs: {
    subtitle: "¿Por qué elegirnos?",
    title: "Trabajo serio, precio justo y entrega puntual",
    text:
      "Sabemos que contratar a alguien para tu casa o negocio es cuestión de confianza. Por eso trabajamos con contrato, fechas claras y comunicación constante.",
    features: [
      { title: "Garantía por escrito", text: "Cada trabajo incluye garantía en materiales y mano de obra.", icon: "fas fa-shield-alt" },
      { title: "Presupuesto sin costo", text: "Visitamos, medimos y cotizamos sin compromiso.", icon: "fas fa-hand-holding-usd" },
      { title: "Materiales de calidad", text: "Maderas secas, acero de calibre correcto y concreto certificado.", icon: "fas fa-gem" },
      { title: "Cumplimos fechas", text: "Acordamos un calendario y te avisamos de cada avance.", icon: "fas fa-calendar-check" },
    ],
    image: "/assets/img/why-us/why-us.svg",
    highlight: { value: "98%", label: "de clientes nos recomiendan" },
  },

  projects: {
    subtitle: "Proyectos recientes",
    title: "Trabajos que hablan por nosotros",
    // category debe coincidir con un id de services-data.jsx
    items: [
      { title: "Cocina integral en cedro", category: "carpinteria", location: "Col. México Norte", image: "/assets/img/projects/project-1.svg" },
      { title: "Portón automático y reja perimetral", category: "herreria", location: "Fracc. Las Américas", image: "/assets/img/projects/project-2.svg" },
      { title: "Ampliación de segunda planta", category: "construccion", location: "Col. Montes de Amé", image: "/assets/img/projects/project-3.svg" },
      { title: "Closet vestidor a la medida", category: "carpinteria", location: "Temozón Norte", image: "/assets/img/projects/project-4.svg" },
      { title: "Escalera de herrería con madera", category: "herreria", location: "Col. Centro", image: "/assets/img/projects/project-5.svg" },
      { title: "Remodelación de baño completo", category: "remodelacion", location: "Fracc. Altabrisa", image: "/assets/img/projects/project-6.svg" },
    ],
  },

  testimonials: {
    subtitle: "Testimonios",
    title: "Lo que dicen nuestros clientes",
    items: [
      {
        name: "María Fernanda López",
        service: "Cocina integral",
        text: "Nos hicieron la cocina completa en cedro. Cumplieron la fecha, el acabado es impecable y nos dejaron todo limpio. Totalmente recomendados.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-1.svg",
      },
      {
        name: "Carlos Canul",
        service: "Portón y reja",
        text: "Cotizaron el mismo día de la visita y el portón quedó mejor de lo que esperaba. Muy buena comunicación durante todo el trabajo.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-2.svg",
      },
      {
        name: "Ana Sosa",
        service: "Ampliación de casa",
        text: "Construyeron la segunda planta de nuestra casa. Nos mandaban fotos del avance cada semana y respetaron el presupuesto acordado.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-3.svg",
      },
    ],
  },

  quote: {
    subtitle: "Solicitar presupuesto",
    title: "Cuéntanos qué necesitas",
    text: "Llena el formulario y te respondemos por WhatsApp con una cotización. Sin compromiso.",
    submitLabel: "Enviar por WhatsApp",
    privacy: "Tus datos solo se usan para responder a tu solicitud.",
    aside: {
      title: "¿Prefieres hablar directo?",
      text: "Escríbenos o llámanos y resolvemos tus dudas antes de cotizar.",
      responseTime: "Menos de 24 horas hábiles",
    },
  },

  cta: {
    title: "¿Listo para empezar tu proyecto?",
    text: "Agenda una visita sin costo. Medimos, cotizamos y te decimos cuándo lo entregamos.",
  },

  footer: {
    about:
      "Carpintería, herrería y construcción en Mérida, Yucatán. Trabajo a la medida con garantía por escrito.",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Proceso", href: "#proceso" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Solicitar presupuesto", href: "#cotizar" },
    ],
    copyright: `© ${new Date().getFullYear()} Taller Roble. Todos los derechos reservados.`,
    credit: { label: "Sitio por Ingeniatex", href: "https://ingeniatex.com" },
  },
};

export default site;
