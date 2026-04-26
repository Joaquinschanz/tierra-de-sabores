import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductSectionProps = {
  title: string;
  products: Product[];
  activeId: number | null;
  showAll: boolean;
  onToggleShowAll: () => void;
  onProductClick: (id: number) => void;
};

function ProductSection({
  title,
  products,
  activeId,
  showAll,
  onToggleShowAll,
  onProductClick,
}: ProductSectionProps) {
  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>

      <div className="cards-grid">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isActive={product.id === activeId}
            onClick={onProductClick}
          />
        ))}
      </div>

      {products.length > 5 && (
        <div className="section-action">
          <button type="button" className="toggle-button" onClick={onToggleShowAll}>
            {showAll ? "-" : "+"}
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductSection;
