import { useId } from 'react';

/**
 * Standard page section with optional eyebrow, title and lead.
 * tone: 'muted' gives the section the soft panel background with hairline borders.
 * layout: 'split' places the heading beside the content on wide screens.
 */
export default function Section({ eyebrow, title, lead, children, tone, layout, className = '', id, width }) {
  const headingId = useId();
  const cls = ['section', tone && `section-${tone}`, className].filter(Boolean).join(' ');
  const head = (eyebrow || title || lead) && (
    <header className="section-head reveal">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 id={headingId} className="section-title">{title}</h2>}
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
  return (
    <section className={cls} id={id} aria-labelledby={title ? headingId : undefined}>
      <div className={`container ${width ? `container-${width}` : ''}`}>
        {layout === 'split' ? (
          <div className="section-split">
            {head}
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
