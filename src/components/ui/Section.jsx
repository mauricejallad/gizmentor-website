import { useId } from 'react';

/**
 * Standard page section: a small label over a hairline, then title and lead.
 * tone: 'muted' (soft grey), 'dark' (brand slate) or 'accent' (brand red). Colours flow to
 *       everything inside through the CSS tokens, so components need no tone-specific styles.
 * layout: 'split' places the heading beside the content on wide screens.
 */
export default function Section({ eyebrow, title, lead, children, tone, layout, className = '', id, width }) {
  const headingId = useId();
  const cls = ['section', tone && `section-${tone}`, className].filter(Boolean).join(' ');
  const label = eyebrow && <p className="section-label reveal">{eyebrow}</p>;
  const head = (title || lead) && (
    <header className="section-head reveal">
      {title && <h2 id={headingId} className="section-title">{title}</h2>}
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
  return (
    <section className={cls} id={id} aria-labelledby={title ? headingId : undefined}>
      <div className={`container ${width ? `container-${width}` : ''}`}>
        {label}
        {layout === 'split' ? (
          <div className="section-split">
            {head || <span />}
            <div>{children}</div>
          </div>
        ) : (
          <>
            {head}
            {children}
          </>
        )}
      </div>
    </section>
  );
}
