import { products } from "../data/products";
import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import magfusionProductImg from '../assets/magfusion-product.png';

export default function Products() {
  useScrollReveal();

  return (
    <div className="page-products">
      <header className="page-header reveal">
        <h1 className="page-title">The Collection</h1>
        <p className="page-subtitle">Refined essentials for practical daily life.</p>
      </header>

      <div className="product-grid">
        {products.map((product, index) => (
          <article key={product.id} className={`product-card reveal reveal-delay-${(index % 3) + 1}`}>
            <Link to={`/products/${product.id}`} className="card-link">
              <div className="card-image-wrapper">
                {product.id === 'magfusion-air' ? (
                  <img
                    src={magfusionProductImg}
                    alt={product.name}
                    className="placeholder-image float-animation"
                  />
                ) : (
                  <div className="placeholder-image float-animation">{product.image}</div>
                )}
              </div>
              <div className="card-info">
                <h2 className="card-product-name">{product.name}</h2>
                <p className="card-product-summary">{product.description}</p>
                <span className="btn btn-secondary">View Product</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
