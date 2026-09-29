// Lista de servicios. Alimenta el menú, la sección #servicios, el filtro de proyectos,
// el select del formulario y los links del footer.
// id: se usa como ancla/valor de formulario/categoría de proyectos (sin acentos ni espacios).

const servicesData = [
  {
    id: "ventanas",
    title: "Ventanas de aluminio",
    shortTitle: "Ventanas",
    icon: "fas fa-border-all",
    des: "Ventanas corredizas, abatibles y fijas en línea nacional y europea, con vidrio claro, filtrasol o templado.",
    features: ["Línea 2\", 3\" y europea", "Mosquiteros a la medida", "Sellado contra lluvia y polvo"],
  },
  {
    id: "canceles",
    title: "Canceles de baño",
    shortTitle: "Canceles",
    icon: "fas fa-shower",
    des: "Canceles corredizos y fijos en cristal templado de 6 y 10 mm, con herrajes de acero inoxidable.",
    features: ["Cristal templado", "Herrajes inoxidables", "Acabado natural, negro o dorado"],
  },
  {
    id: "puertas",
    title: "Puertas y fachadas de aluminio",
    shortTitle: "Puertas y fachadas",
    icon: "fas fa-door-open",
    des: "Puertas de acceso, puertas de cristal para negocio y fachadas integrales para casas y locales comerciales.",
    features: ["Puertas de cristal templado", "Fachadas y aparadores", "Cerraduras de seguridad"],
  },
  {
    id: "portones",
    title: "Portones y rejas",
    shortTitle: "Portones",
    icon: "fas fa-warehouse",
    des: "Portones corredizos y abatibles, rejas perimetrales y protecciones con opción de motor automático.",
    features: ["Portones automáticos", "Rejas perimetrales", "Protecciones para ventanas"],
  },
  {
    id: "herreria",
    title: "Herrería y estructuras",
    shortTitle: "Herrería",
    icon: "fas fa-fire",
    des: "Barandales, escaleras, techumbres y estructuras metálicas con soldadura de calidad y pintura anticorrosiva.",
    features: ["Barandales y escaleras", "Estructuras metálicas", "Pintura electrostática"],
  },
  {
    id: "domos",
    title: "Domos, pérgolas y techos",
    shortTitle: "Domos y pérgolas",
    icon: "fas fa-sun",
    des: "Domos de policarbonato y acrílico, pérgolas de aluminio y techos de lámina para cocheras y terrazas.",
    features: ["Domos y tragaluces", "Pérgolas de aluminio", "Techos para cochera"],
  },
];

export default servicesData;
