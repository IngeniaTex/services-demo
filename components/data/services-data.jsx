// Lista de servicios. Alimenta el menú, la sección #servicios, el filtro de proyectos,
// el select del formulario y los links del footer.
// id: se usa como ancla/valor de formulario/categoría de proyectos (sin acentos ni espacios).

const servicesData = [
  {
    id: "carpinteria",
    title: "Carpintería a la medida",
    shortTitle: "Carpintería",
    icon: "fas fa-hammer",
    des: "Cocinas integrales, closets, puertas, muebles y acabados en madera diseñados para tu espacio.",
    features: ["Cocinas y closets", "Puertas y ventanas", "Muebles a la medida"],
  },
  {
    id: "herreria",
    title: "Herrería y estructuras",
    shortTitle: "Herrería",
    icon: "fas fa-fire",
    des: "Portones, rejas, barandales, escaleras y estructuras metálicas con soldadura de calidad.",
    features: ["Portones automáticos", "Rejas y protecciones", "Estructuras y techos"],
  },
  {
    id: "construccion",
    title: "Construcción y albañilería",
    shortTitle: "Construcción",
    icon: "fas fa-hard-hat",
    des: "Obra nueva, ampliaciones, bardas y losas con supervisión en cada etapa del proyecto.",
    features: ["Obra nueva y ampliaciones", "Bardas y losas", "Supervisión de obra"],
  },
  {
    id: "remodelacion",
    title: "Remodelación",
    shortTitle: "Remodelación",
    icon: "fas fa-paint-roller",
    des: "Renovamos baños, cocinas, fachadas e interiores completos sin sorpresas en el presupuesto.",
    features: ["Baños y cocinas", "Fachadas", "Pisos y acabados"],
  },
  {
    id: "aluminio",
    title: "Aluminio y vidrio",
    shortTitle: "Aluminio y vidrio",
    icon: "fas fa-border-all",
    des: "Ventanas, canceles de baño, domos y puertas de aluminio con vidrio templado.",
    features: ["Ventanas y puertas", "Canceles de baño", "Domos y tragaluces"],
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento general",
    shortTitle: "Mantenimiento",
    icon: "fas fa-wrench",
    des: "Impermeabilización, pintura, plomería básica y reparaciones para casas y negocios.",
    features: ["Impermeabilización", "Pintura interior y exterior", "Reparaciones menores"],
  },
];

export default servicesData;
