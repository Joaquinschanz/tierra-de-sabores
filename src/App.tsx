import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import ProductSection from "./components/ProductSection";
import { products } from "./data/products";

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [showAllTradicionales, setShowAllTradicionales] = useState(false);
  //const [showAllOtros, setShowAllOtros] = useState(false);

  const activeProduct = products.find((product) => product.id === activeId);
  const tradicionales = products.filter((product) => product.category === "PICADAS TRADICIONALES");
  //const otros = products.filter((product) => product.category === "OTROS");

  const handleCardClick = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`app ${activeId ? "modal-open" : ""}`}>
      <div className="page-opening-curtain"></div>
      <div className="overlay-bg"></div>

      <Header />

      <main id="picadas" className="main-content">
        <ProductSection
          title="Picadas Tradicionales..."
          products={tradicionales}
          activeId={activeId}
          showAll={showAllTradicionales}
          onToggleShowAll={() => setShowAllTradicionales((prev) => !prev)}
          onProductClick={handleCardClick}
        />
      </main>
      
      {/*
      <main id="otros" className="main-content">
        <ProductSection
          title="Otros..."
          products={otros}
          activeId={activeId}
          showAll={showAllOtros}
          onToggleShowAll={() => setShowAllOtros((prev) => !prev)}
          onProductClick={handleCardClick}
        />
      </main> */}

      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveId(null)} />
      )}

      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
