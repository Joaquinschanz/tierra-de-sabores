import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { INSTAGRAM_URL, MAPS_URL, WHATSAPP_NUMBER } from "../data/contact";
import { FaChevronRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-info">
          <p className="footer-kicker">CONTACTO</p>
          <h2 className="footer-title">
            Estamos para <span>ayudarte</span>
          </h2>

          <p className="footer-description">
            Consultanos por pedidos, eventos o cualquier consulta. Te respondemos a la brevedad.
          </p>

          <div className="footer-contact-list">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <FaWhatsapp />
              <div>
                <strong>WhatsApp</strong>
                <span>+54 3492 59-2648</span>
              </div>
              <FaChevronRight className="footer-arrow" />
            </a>

            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <FaInstagram />
              <div>
                <strong>Instagram</strong>
                <span>@tierra.de.sabores</span>
              </div>
              <FaChevronRight className="footer-arrow" />
            </a>

            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <FaMapMarkerAlt />
              <div>
                <strong>Dirección</strong>
                <span>Ameghino 38, Rafaela, Santa Fe</span>
              </div>
              <FaChevronRight className="footer-arrow" />
            </a>

            <div className="footer-contact-item">
              <FaClock />
              <div>
                <strong>Horarios</strong>
                <span> Lunes a Viernes · 9:00 a 13:00 hs y 16:30 a 20:30hs</span>
                <span>Sábados · 9:00 a 13:00 hs y 18:30 a 20:30hs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-map-box">
          <iframe
            title="Ubicación Tierra de Sabores"
            src="https://www.google.com/maps?q=Ameghino%2038%2C%20Rafaela%2C%20Santa%20Fe&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-floating-button"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;