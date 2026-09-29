// Única fuente de verdad del contenido del sitio.
// Para adaptar la plantilla a un nuevo cliente edita este archivo (y services-data.jsx);
// no hace falta tocar los componentes.

// WhatsApp: número en formato internacional sin "+" ni espacios y mensaje prellenado
// que usan todos los botones (hero, CTA, contacto, flotante y formulario).
const whatsappNumber = "529997488654";
const whatsappMessage = "Me interesa cotizar esa pagina web para mi negocio";

const site = {
  brand: {
    name: "Taller de Herrería",
    tagline: "Aluminio · Herrería · Vidrio",
    siteTitle: "Taller de Herrería | Aluminio, Herrería y Vidrio en Mérida",
    description:
      "Taller de Herrería: ventanas y canceles de aluminio, puertas de cristal, portones, rejas y herrería en Mérida, Yucatán. Presupuesto sin costo, garantía por escrito e instalación puntual.",
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
    email: "contacto@tallerdeherreria.mx",
    address: "Calle 42 #310, Col. Chuburná de Hidalgo, Mérida, Yucatán",
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

  services: {
    subtitle: "Nuestros servicios",
    title: "Todo en aluminio, vidrio y herrería, en un solo taller",
  },

  hero: {
    subtitle: "Más de 15 años trabajando el metal",
    title: "Aluminio, vidrio y herrería a la medida de tu casa o negocio",
    text:
      "Fabricamos e instalamos ventanas, canceles, puertas, portones y estructuras con perfiles de primera y acabados que resisten el clima de Yucatán. Medimos sin costo y cumplimos la fecha de entrega.",
    primaryCta: { label: "Solicitar presupuesto", href: "#cotizar" },
    image: "/assets/img/hero/hero.svg",
    badge: { value: "+15", label: "años de experiencia" },
    rating: { value: "4.9", count: "+120 reseñas de clientes" },
  },

  stats: [
    { value: "+1,200", label: "Instalaciones realizadas", icon: "fas fa-tools" },
    { value: "+15", label: "Años de experiencia", icon: "fas fa-medal" },
    { value: "100%", label: "Garantía por escrito", icon: "fas fa-file-signature" },
    { value: "24 h", label: "Respuesta a cotizaciones", icon: "fas fa-stopwatch" },
  ],

  about: {
    subtitle: "Sobre nosotros",
    title: "Un taller familiar de aluminio y herrería con palabra",
    text:
      "Somos un equipo de aluminieros, vidrieros y herreros con más de 15 años trabajando en Mérida. Fabricamos en nuestro propio taller, cotizamos claro, usamos perfiles y cristales certificados e instalamos cuando dijimos.",
    points: [
      "Presupuesto detallado sin costo",
      "Perfiles de aluminio y cristal certificados",
      "Garantía por escrito en cada trabajo",
      "Instalación limpia y sellado profesional",
    ],
    images: ["/assets/img/about/about-1.svg", "/assets/img/about/about-2.svg"],
    owner: { name: "Jorge Canché", role: "Fundador y maestro herrero" },
    cta: { label: "Conoce nuestros servicios", href: "#servicios" },
  },

  process: {
    subtitle: "Nuestro proceso",
    title: "Así trabajamos contigo",
    steps: [
      {
        title: "Visita y medición",
        text: "Vamos a tu domicilio o negocio, tomamos medidas exactas de cada vano y te mostramos muestras de perfiles y cristales.",
        icon: "fas fa-ruler-combined",
      },
      {
        title: "Presupuesto claro",
        text: "Te enviamos una cotización detallada por WhatsApp en menos de 24 horas.",
        icon: "fas fa-file-invoice-dollar",
      },
      {
        title: "Fabricación en taller",
        text: "Cortamos, armamos y soldamos en nuestro taller con maquinaria de precisión y te mandamos avances por foto.",
        icon: "fas fa-tools",
      },
      {
        title: "Instalación y entrega",
        text: "Instalamos, sellamos, limpiamos y te entregamos con garantía por escrito.",
        icon: "fas fa-clipboard-check",
      },
    ],
  },

  whyUs: {
    subtitle: "¿Por qué elegirnos?",
    title: "Acabados que duran, precio justo y entrega puntual",
    text:
      "El sol, la humedad y la brisa salina de Yucatán desgastan cualquier material. Por eso usamos perfiles anodizados, pintura anticorrosiva y herrajes inoxidables, con contrato y fechas claras.",
    features: [
      { title: "Garantía por escrito", text: "Cada trabajo incluye garantía en materiales y mano de obra.", icon: "fas fa-shield-alt" },
      { title: "Presupuesto sin costo", text: "Visitamos, medimos y cotizamos sin compromiso.", icon: "fas fa-hand-holding-usd" },
      { title: "Materiales de calidad", text: "Aluminio anodizado, cristal templado certificado y acero del calibre correcto.", icon: "fas fa-gem" },
      { title: "Cumplimos fechas", text: "Acordamos un calendario de fabricación e instalación y te avisamos de cada avance.", icon: "fas fa-calendar-check" },
    ],
    image: "/assets/img/why-us/why-us.svg",
    highlight: { value: "98%", label: "de clientes nos recomiendan" },
  },

  projects: {
    subtitle: "Proyectos recientes",
    title: "Trabajos que hablan por nosotros",
    // category debe coincidir con un id de services-data.jsx
    items: [
      { title: "Ventanales corredizos línea europea", category: "ventanas", location: "Col. México Norte", image: "/assets/img/projects/project-1.svg" },
      { title: "Portón automático y reja perimetral", category: "portones", location: "Fracc. Las Américas", image: "/assets/img/projects/project-2.svg" },
      { title: "Fachada de aluminio y cristal para local", category: "puertas", location: "Col. Montes de Amé", image: "/assets/img/projects/project-3.svg" },
      { title: "Pérgola de aluminio para terraza", category: "domos", location: "Temozón Norte", image: "/assets/img/projects/project-4.svg" },
      { title: "Escalera y barandal de herrería", category: "herreria", location: "Col. Centro", image: "/assets/img/projects/project-5.svg" },
      { title: "Cancel de baño en cristal templado", category: "canceles", location: "Fracc. Altabrisa", image: "/assets/img/projects/project-6.svg" },
    ],
  },

  testimonials: {
    subtitle: "Testimonios",
    title: "Lo que dicen nuestros clientes",
    items: [
      {
        name: "María Fernanda López",
        service: "Ventanas de aluminio",
        text: "Cambiaron todas las ventanas de la casa por línea europea. Ya no entra polvo ni agua, cumplieron la fecha y dejaron todo limpio. Totalmente recomendados.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-1.svg",
      },
      {
        name: "Carlos Canul",
        service: "Portón y reja",
        text: "Cotizaron el mismo día de la visita y el portón automático quedó mejor de lo que esperaba. Muy buena comunicación durante todo el trabajo.",
        rating: 5,
        avatar: "/assets/img/testimonials/avatar-2.svg",
      },
      {
        name: "Ana Sosa",
        service: "Fachada comercial",
        text: "Nos hicieron la fachada de cristal y la puerta de acceso de la tienda. Se ve moderna, mandaban fotos del avance y respetaron el presupuesto acordado.",
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
    text: "Agenda una visita sin costo. Medimos, cotizamos y te decimos cuándo lo instalamos.",
  },

  footer: {
    about:
      "Taller de aluminio, vidrio y herrería en Mérida, Yucatán. Fabricación e instalación a la medida con garantía por escrito.",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Proceso", href: "#proceso" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Solicitar presupuesto", href: "#cotizar" },
    ],
    copyright: `© ${new Date().getFullYear()} Taller de Herrería. Todos los derechos reservados.`,
    credit: { label: "Sitio por Ingeniatex", href: "https://ingeniatex.com" },
  },
};

export default site;
