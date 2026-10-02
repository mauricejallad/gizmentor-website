import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';
import ThemedImage from '../ui/ThemedImage';
import inHandDark from '../../assets/easelect/easelect-in-hand.webp';
import inHandLight from '../../assets/easelect/easelect-in-hand-light.webp';
import challengeImg from '../../assets/easelect/easelect-challenge.webp';
import electronicsImg from '../../assets/easelect/category-electronics.webp';
import gadgetsImg from '../../assets/images/about-gadgets.webp';
import facadeImg from '../../assets/images/investors-facade.webp';

// The first photo shows the Easelect app, so it follows the theme.
const images = [{ light: inHandLight, dark: inHandDark }, challengeImg, electronicsImg, gadgetsImg, facadeImg];

/**
 * Red full-bleed slider of the five recommendation principles: counter and arrows, a giant title,
 * the body text, and a photo filling the far half. Every slide is in the markup (the first one
 * visible), so the prerendered page carries all five principles.
 */
export default function PrincipleSlider() {
  const { t } = useLocale();
  const p = t.about.principles;
  const s = t.home.principles;
  const [index, setIndex] = useState(0);
  const count = p.items.length;
  const go = (step) => setIndex((i) => (i + step + count) % count);
  return (
    <section className="slider-band section-accent" aria-roledescription="carousel" aria-label={p.eyebrow}>
      <div className="slider-media" aria-hidden="true">
        {images.map((src, i) => (typeof src === 'string'
          ? <img key={src} src={src} alt="" width="1536" height="1024" loading="lazy" className={i === index ? 'is-active' : ''} />
          : <ThemedImage key={src.light} light={src.light} dark={src.dark} alt="" width="800" height="1200" className={i === index ? 'is-active' : ''} />
        ))}
      </div>
      <div className="container slider-inner">
        <div className="slider-head">
          <p className="section-label">{p.eyebrow}</p>
          <p className="slider-count" aria-hidden="true"><span>{index + 1}</span> / {count}</p>
        </div>
        <div className="slider-body">
          <div className="slider-controls">
            <button type="button" className="round-button" onClick={() => go(-1)} aria-label={t.common.previous}>
              <ArrowLeft size={18} strokeWidth={1.6} className="flip-rtl" aria-hidden="true" />
            </button>
            <button type="button" className="round-button" onClick={() => go(1)} aria-label={t.common.next}>
              <ArrowRight size={18} strokeWidth={1.6} className="flip-rtl" aria-hidden="true" />
            </button>
          </div>
          <ol className="slides">
            {p.items.map((item, i) => (
              <li
                key={item.title}
                className={`slide ${i === index ? 'is-active' : ''}`}
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${count}`}
                aria-hidden={i !== index}
              >
                <h3 className="slide-title">{item.title}</h3>
                <p className="slide-text">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="slider-note">{s.note}</p>
        </div>
      </div>
    </section>
  );
}
