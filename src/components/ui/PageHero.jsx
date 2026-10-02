import BrandMark from '../brand/BrandMark';
import CircleIcon from './CircleIcon';
import { useLocale } from '../../i18n/useLocale';

/**
 * Inner-page hero on the brand slate: a giant display word, the page title and lead beneath it,
 * an outlined mark drifting behind, and a round "scroll on" button. `word` is decorative
 * (the h1 carries the title); `next` is the id of the section the button scrolls to.
 * `media` renders full-bleed beneath the hero (a banner image); `children` sit inside it.
 */
export default function PageHero({ id, word, eyebrow, title, lead, actions, children, media, next, className = '' }) {
  const { t } = useLocale();
  return (
    <>
      <section className={`page-hero ${className}`.trim()} aria-labelledby={id}>
        <BrandMark variant="outline" className="page-hero-mark" />
        <div className="container page-hero-inner">
          {eyebrow && <p className="section-label hero-label">{eyebrow}</p>}
          {word && <p className="hero-word" aria-hidden="true"><span>{word}</span></p>}
          <div className="page-hero-copy">
            <h1 id={id} className="hero-title">{title}</h1>
            <div>
              {lead && <p className="hero-lead">{lead}</p>}
              {actions && <div className="btn-row">{actions}</div>}
            </div>
          </div>
          {children}
        </div>
        {next && (
          <a href={`#${next}`} className="hero-next" aria-label={t.common.scrollDown}>
            <CircleIcon icon="down" className="circle-icon-lg" />
          </a>
        )}
      </section>
      {media && <div className="hero-media">{media}</div>}
    </>
  );
}
