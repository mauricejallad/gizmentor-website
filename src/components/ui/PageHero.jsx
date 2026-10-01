/** Inner-page hero: badge-style eyebrow, title and lead, with optional actions and extra content. */
export default function PageHero({ id, eyebrow, title, lead, actions, children, className = '' }) {
  return (
    <section className={`page-hero ${className}`.trim()} aria-labelledby={id}>
      <div className="container">
        {eyebrow && <p className="badge reveal"><span className="badge-dot" aria-hidden="true" />{eyebrow}</p>}
        <h1 id={id} className="display reveal reveal-delay-1">{title}</h1>
        {lead && <p className="hero-lead reveal reveal-delay-2">{lead}</p>}
        {actions && <div className="btn-row reveal reveal-delay-3">{actions}</div>}
        {children}
      </div>
    </section>
  );
}
