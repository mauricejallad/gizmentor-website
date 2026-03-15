function ProductCard({ product }) {
    return (
      <div className="product-card">
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
      </div>
    );
  }