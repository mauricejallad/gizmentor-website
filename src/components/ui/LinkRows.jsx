import { Link } from 'react-router-dom';
import { Blocks, ChartColumn, Store } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';
import CircleIcon from './CircleIcon';

const icons = { Blocks, ChartColumn, Store };

/** A row of bordered cells (icon, title, body, round arrow) — rows: [{ type, icon, title, body }] → /contact?type=… */
export default function LinkRows({ rows }) {
  const { to } = useLocale();
  return (
    <ul className="link-cells">
      {rows.map((r, i) => {
        const Icon = icons[r.icon];
        return (
          <li key={r.type} className={`reveal reveal-delay-${i + 1}`}>
            <Link to={to(`/contact?type=${r.type}`)} className="link-cell">
              <span className="link-cell-icon" aria-hidden="true">{Icon && <Icon size={26} strokeWidth={1.3} />}</span>
              <span className="link-cell-title">{r.title}</span>
              <span className="link-cell-body">{r.body}</span>
              <CircleIcon className="link-cell-arrow" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
