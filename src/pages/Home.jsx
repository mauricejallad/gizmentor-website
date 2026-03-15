import heroBanner from '../assets/hero-banner.png';
import magfusionAirImg from '../assets/magfusion-air.png';
import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="page-home">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <h1 className="hero-title reveal reveal-delay-1">
            Every Product, Mentored to Perfection.
          </h1>
          <Link
            to="/products"
            className="btn btn-primary reveal reveal-delay-2"
          >
            View Collection
          </Link>
        </div>
      </section>

      {/* Brand Clarity Strip */}
      <section className="clarity-strip reveal">
        <div className="clarity-content">
          <p>
            We don't sell everything. We select practical daily essentials, break them down, and refine them until they meet our standard.
          </p>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="featured-showcase">
        <div className="featured-product-card">
          <div className="card-image-wrapper reveal">
            <img
              src={magfusionAirImg}
              alt="MagFusion Air magnetic power bank on phone"
              className="placeholder-image float-animation"
            />
          </div>
          <div className="card-info reveal reveal-delay-1">
            <h3 className="card-product-name">MagFusion Air</h3>
            <p className="card-product-summary">Machined aluminum. Silent mechanics.</p>
            <Link to="/products/magfusion-air" className="btn btn-secondary">View Product</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
