import { useId } from 'react';

/** Standard page section with optional eyebrow, title and lead. */
export default function Section({ eyebrow, title, lead, children, tone, className = '', id, align = 'left', width }) {
  const headingId = useId();
  const cls = ['section', tone && `section-${tone}`, className].filter(Boolean).join(' ');
  return (
    <section className={cls} id={id} aria-labelledby={title ? headingId : undefined}>
      <div className={`container ${width ? `container-${width}` : ''}`}>
        {(eyebrow || title || lead) && (
          <header className={`section-head reveal ${align === 'center' ? 'is-center' : ''}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 id={headingId} className="section-title">{title}</h2>}
            {lead && <p className="section-lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
