import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();
  return (
    <div className="page-about">
      {/* Brand Clarification */}
      <section className="about-clarification reveal">
        <h1 className="page-title">The Standard</h1>
        <p className="page-subtitle">We don't manufacture from scratch. We source practical tools, rigorously test them, and re-engineer their weak points into premium experiences.</p>
      </section>

      {/* Methodology */}
      <section className="about-methodology">
        <div className="method-blocks">
          <div className="method-block reveal reveal-delay-1">
            <span className="method-number">01.</span>
            <h3>Select.</h3>
            <p>We source practical, high-utility products that suffer from compromised build quality or poor execution.</p>
          </div>
          <div className="method-block reveal reveal-delay-2">
            <span className="method-number">02.</span>
            <h3>Test.</h3>
            <p>We break them down. We stress test the mechanics, evaluate the materials, and find where the design fails.</p>
          </div>
          <div className="method-block reveal reveal-delay-3">
            <span className="method-number">03.</span>
            <h3>Refine.</h3>
            <p>We upgrade the materials, silenced the hinges, and re-assemble a product that feels permanent.</p>
          </div>
        </div>
      </section>

      {/* Closing Mission */}
      <section className="about-closing reveal">
        <h2>Every Detail, Mentored to Perfection.</h2>
        <Link to="/products" className="btn btn-primary">View the Collection</Link>
      </section>
    </div>
  );
}
