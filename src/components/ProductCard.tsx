import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  isActive: boolean;
  onClick: (id: number) => void;
};

function ProductCard({ product, isActive, onClick }: ProductCardProps) {
  return (
    <article
      className={`product-card ${isActive ? "active" : ""}`}
      onClick={() => onClick(product.id)}
    >
      <div className="product-image-circle">
        <img src={product.catalogImage} alt={product.name} />
      </div>

      <div className="product-card-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-hint">Ver detalles</p>
      </div>
    </article>
  );
}

export default ProductCard;
