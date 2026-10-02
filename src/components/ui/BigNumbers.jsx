import CountUp from '../motion/CountUp';
import BrandMark from '../brand/BrandMark';

/**
 * Giant red figures with hairline labels. `main` is the headline figure; `items` sit beneath it.
 * Only factual counts belong here (steps, stages, categories) — never estimates.
 */
export default function BigNumbers({ main, items = [] }) {
  return (
    <div className="big-numbers">
      <BrandMark variant="outline" className="big-numbers-mark" />
      <div className="big-number big-number-main reveal">
        <p className="big-number-label">{main.label}</p>
        <p className="big-number-value"><CountUp value={main.value} /></p>
      </div>
      <div className="big-numbers-row">
        {items.map((n, i) => (
          <div key={n.label} className={`big-number reveal reveal-delay-${i + 1}`}>
            <p className="big-number-label">{n.label}</p>
            <p className="big-number-value"><CountUp value={n.value} /></p>
          </div>
        ))}
      </div>
    </div>
  );
}
