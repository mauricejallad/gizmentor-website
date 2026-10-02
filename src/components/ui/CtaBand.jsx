import Button from './Button';
import BrandMark from '../brand/BrandMark';

/** Closing call to action: a full-bleed slate band with a giant title and round-arrow buttons. */
export default function CtaBand({ title, body, primary, secondary, id }) {
  const render = (cta, fallbackVariant) => {
    if (!cta) return null;
    const { label, variant = fallbackVariant, ...rest } = cta;
    return <Button variant={variant} {...rest}>{label}</Button>;
  };
  return (
    <section className="cta-band" aria-label={title} id={id}>
      <BrandMark variant="outline" className="cta-mark" />
      <div className="container cta-inner">
        <h2 className="cta-title reveal">{title}</h2>
        <div className="cta-side reveal reveal-delay-1">
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
