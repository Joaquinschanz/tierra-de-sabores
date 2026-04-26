import type { Product } from "../types/product";
import {WHATSAPP_NUMBER, INSTAGRAM_URL} from "../data/contact";

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="premium-modal-backdrop" onClick={onClose}>
      <div className="premium-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="premium-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <div className="premium-image-side">
          <img
            src={product.detailImage}
            alt={product.name}
            className="premium-main-image"
          />
        </div>

        <div className="premium-info-side">
          <p className="premium-category">{product.category}</p>

          <h2 className="premium-product-title">{product.name}</h2>

          <p className="premium-short-description">
            {product.shortDescription}
          </p>

          <div className="premium-ingredients-box">
            <h3 className="premium-ingredients-title">INGREDIENTES</h3>

            <div className="premium-ingredients-list">
              {product.description.map((item, index) => (
                <div className="premium-ingredient-row" key={index}>
                  <span>{item.ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-price-box">
            <span className="premium-price-label">PRECIO</span>
            <p className="premium-price">{product.price}</p>
          </div>

          <div className="premium-order-buttons">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Buenas! Quiero pedir una picada ${product.name}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="order-btn whatsapp-btn"
          >
            Pedir por WhatsApp
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="order-btn instagram-btn"
          >
            Pedir por Instagram
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
