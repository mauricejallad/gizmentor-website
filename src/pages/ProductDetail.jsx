import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import magfusionDetailImg from '../assets/magfusion-detail.png';
import magfusionAluminumImg from '../assets/magfusion-aluminum.png';
import magfusionMagnetsImg from '../assets/magfusion-magnets.png';
import magfusionHingeImg from '../assets/magfusion-hinge.png';

export default function ProductDetail() {
  const { id } = useParams();

  // In a real app, you would fetch the product data based on the ID.
  // Using MagFusion Air as the default example.
  const product = {
    name: 'MagFusion Air',
    subtitle: 'Magnetic alignment, redefined.',
    story: 'We noticed most magnetic mounts prioritized convenience over build quality, resulting in wobbly, plastic-heavy experiences. We broke down the mechanics, discarding the weak points. By CNC-machining the main body from aerospace-grade aluminum and custom-tuning the magnetic array, we created a mount that feels solid and silent.',
    highlights: [
      { title: 'Machined Aluminum Body', desc: 'No plastic creaks. Just the cold, reassuring feel of absolute stability.', imgText: 'Detail Shot: Aluminum' },
      { title: 'Custom Magnetic Array', desc: 'Recalibrated magnetic strength provides perfect alignment without requiring excessive force to remove your device.', imgText: 'Detail Shot: Magnets' },
      { title: 'Silent Articulation', desc: 'A re-engineered dampening joint means smooth, silent angle adjustments.', imgText: 'Detail Shot: Hinge' }
    ],
    specs: [
      { label: 'Materials', value: 'Aerospace-grade Aluminum, Silicone contact pad' },
      { label: 'Weight', value: '340g (12oz) for absolute desk stability' },
      { label: 'Compatibility', value: 'All MagSafe compatible devices (iPhone 12 and later)' },
      { label: 'Finish', value: 'Matte Anodized Black or Space Gray' }
    ]
  };

  return (
    <div className="page-pdp">
      <div className="pdp-nav">
          <Link to="/products" className="back-link"><ArrowLeft size={16} /> Back to Collection</Link>
      </div>

      {/* Hero */}
      <section className="pdp-hero">
        <div className="pdp-hero-image">
          <img
            src={magfusionDetailImg}
            alt={`${product.name} overview`}
            className="pdp-hero-img"
          />
        </div>
        <div className="pdp-hero-info">
          <h1 className="pdp-title">{product.name}</h1>
          <p className="pdp-subtitle">{product.subtitle}</p>
          <a href="#contact-inquiry" className="btn btn-primary">Request Details</a>
        </div>
      </section>

      {/* Refinement Story */}
      <section className="pdp-story">
        <div className="story-content">
          <h2 className="section-label">The Refinement</h2>
          <p className="story-text">{product.story}</p>
        </div>
      </section>

      {/* Visual Highlights */}
      <section className="pdp-highlights">
        {product.highlights.map((highlight, index) => (
          <div key={index} className="highlight-block">
            <div className="highlight-image">
              {highlight.imgText === 'Detail Shot: Aluminum' ? (
                <img
                  src={magfusionAluminumImg}
                  alt={highlight.title}
                  className="highlight-img"
                />
              ) : highlight.imgText === 'Detail Shot: Magnets' ? (
                <img
                  src={magfusionMagnetsImg}
                  alt={highlight.title}
                  className="highlight-img"
                />
              ) : highlight.imgText === 'Detail Shot: Hinge' ? (
                <img
                  src={magfusionHingeImg}
                  alt={highlight.title}
                  className="highlight-img"
                />
              ) : (
                <div className="placeholder-highlight">{highlight.imgText}</div>
              )}
            </div>
            <div className="highlight-text">
              <h3>{highlight.title}</h3>
              <p>{highlight.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Essential Specs */}
      <section className="pdp-specs">
        <div className="specs-container">
            <h2 className="specs-title">Specifications</h2>
            <ul className="specs-list">
              {product.specs.map((spec, index) => (
                <li key={index} className="spec-item">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </li>
              ))}
            </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pdp-final-cta" id="contact-inquiry">
         <div className="cta-content">
            <h2>Ready to Elevate?</h2>
            <Link to="/contact?product=magfusion-air" className="btn btn-primary">Inquire About This Product</Link>
         </div>
      </section>
    </div>
  );
}
