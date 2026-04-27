import "./Header.css";

function Header() {
  return (
    <header className="hero-header">
      <nav className="hero-navbar">
        <a href="#" className="hero-brand" aria-label="Tierra de Sabores">
          <img
            src="/logo_tierra_de_sabores.png"
            alt="Tierra de Sabores"
            className="hero-logo"
          />
        </a>

        <div className="hero-nav-links">
          <a href="#picadas">Picadas</a>
          <a href="#contacto">Contacto</a>
        </div>

        <a
          href="https://wa.me/543492592648"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Consultar
        </a>
      </nav>

      <div className="hero-content">
        <p className="hero-kicker">PICADAS ARTESANALES Y MÁS...</p>

        <h1 className="hero-title">
          Sabores que
          <br />
          unen <span>momentos</span>
        </h1>

        <p className="hero-description">
          Conocé nuestras opciones y elegí el producto ideal para compartir.
        </p>
      </div>
    </header>
  );
}

export default Header;
