import { Link } from 'react-router-dom';
import { ArrowRight, Blocks, ChartColumn, Store } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';

const icons = { Blocks, ChartColumn, Store };

/** Stacked link rows (icon, title, body, arrow) — rows: [{ type, icon, title, body }] → /contact?type=… */
export default function LinkRows({ rows }) {
  const { to } = useLocale();
  return (
    <ul className="link-rows">
      {rows.map((r, i) => {
        const Icon = icons[r.icon];
        return (
          <li key={r.type} className={`reveal reveal-delay-${i + 1}`}>
            <Link to={to(`/contact?type=${r.type}`)} className="link-row">
              <span className="icon-tile" aria-hidden="true">{Icon && <Icon size={20} strokeWidth={1.6} />}</span>
              <span className="link-row-text">
                <span className="link-row-title">{r.title}</span>
                <span className="link-row-body">{r.body}</span>
              </span>
              <ArrowRight size={18} aria-hidden="true" className="flip-rtl link-row-arrow" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
