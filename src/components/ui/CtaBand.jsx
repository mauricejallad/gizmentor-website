import Button from './Button';

export default function CtaBand({ title, body, primary, secondary }) {
  const render = (cta, fallbackVariant) => {
    if (!cta) return null;
    const { label, variant = fallbackVariant, ...rest } = cta;
    return <Button variant={variant} {...rest}>{label}</Button>;
  };
  return (
    <section className="cta-band" aria-label={title}>
      <div className="container">
        <div className="cta-card reveal">
          <h2 className="cta-title">{title}</h2>
          {body && <p className="cta-body">{body}</p>}
          <div className="btn-row">
            {render(primary, 'primary')}
            {render(secondary, 'secondary')}
          </div>
        </div>
      </div>
    </section>
  );
}
