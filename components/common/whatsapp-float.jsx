import site from "@/components/data/site";

// Botón flotante de WhatsApp (esquina inferior izquierda).
const WhatsappFloat = () => {
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Escribir por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span>¿Te cotizamos?</span>
    </a>
  );
};

export default WhatsappFloat;
