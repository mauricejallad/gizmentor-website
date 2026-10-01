import Button from './Button';

/** Closing call to action: an inverted panel (dark on light theme, light on dark theme). */
export default function CtaBand({ title, body, primary, secondary, id }) {
  const render = (cta, fallbackVariant) => {
    if (!cta) return null;
    const { label, variant = fallbackVariant, ...rest } = cta;
    return <Button variant={variant} {...rest}>{label}</Button>;
  };
  return (
    <section className="cta-band" aria-label={title} id={id}>
      <div className="container">
        <div className="cta-card reveal">
          <div>
            <h2 className="cta-title">{title}</h2>
            {body && <p className="cta-body">{body}</p>}
          </div>
          <div className="btn-row">
            {render(primary, 'primary')}
            {render(secondary, 'secondary')}
          </div>
        </div>
      </div>
    </section>
  );
}
