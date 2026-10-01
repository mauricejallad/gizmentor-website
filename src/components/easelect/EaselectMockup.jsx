import { Check, Search, Sparkles, Store } from 'lucide-react';

/**
 * Illustrative Easelect conversation, built in HTML/CSS (no image weight).
 * Product names are deliberately generic — replace with real screenshots when available.
 */
export default function EaselectMockup({ className = '' }) {
  return (
    <figure className={`es-mock ${className}`}>
      <div className="es-phone" aria-hidden="true">
        <div className="es-notch" />
        <div className="es-screen">
          <div className="es-appbar">
            <span className="es-wordmark">easelect</span>
            <span className="es-appbar-pill">AI shopping research</span>
          </div>

          <div className="es-msg es-user es-step" style={{ '--i': 0 }}>
            I need headphones for long flights — comfortable, great noise cancelling, under AED 1,000.
          </div>

          <div className="es-card es-step" style={{ '--i': 1 }}>
            <p className="es-card-label"><Sparkles size={13} /> Your requirements</p>
            <ul className="es-tags">
              <li>All-day comfort</li>
              <li>Strong ANC</li>
              <li>≤ AED 1,000</li>
            </ul>
          </div>

          <div className="es-card es-step" style={{ '--i': 2 }}>
            <p className="es-card-label"><Search size={13} /> Researching</p>
            <ul className="es-sources">
              <li><Check size={13} /> Specifications</li>
              <li><Check size={13} /> Expert reviews</li>
              <li><Check size={13} /> YouTube reviews</li>
              <li><Check size={13} /> Reddit discussions</li>
            </ul>
          </div>

          <div className="es-card es-pick es-step" style={{ '--i': 3 }}>
            <p className="es-pick-badge">Best match for you</p>
            <p className="es-pick-name">Over-ear ANC · Option A</p>
            <p className="es-pick-why">Most consistent praise for comfort on long wear, with top-tier noise cancelling in your budget.</p>
            <div className="es-pick-row">
              <span>2 alternatives compared</span>
              <span className="es-pick-cta"><Store size={13} /> View prices</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="es-caption">Illustrative interface</figcaption>
    </figure>
  );
}
