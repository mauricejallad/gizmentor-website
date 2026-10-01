import {
  BadgeCheck, BrainCircuit, Compass, Cpu, FileSearch, Layers, PenTool, Rocket, Scale, ShoppingBag, Sparkles, Store,
} from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';

const icons = { BadgeCheck, BrainCircuit, Compass, Cpu, FileSearch, Layers, PenTool, Rocket, Scale, ShoppingBag, Sparkles, Store };

/** Icon + title + body grid. Defaults to the company capabilities; pass `items` to reuse the layout. */
export default function CapabilityGrid({ items }) {
  const { t } = useLocale();
  const list = items || t.common.capabilities;
  return (
    <ul className="capabilities">
      {list.map((c, i) => {
        const Icon = icons[c.icon];
        return (
          <li key={c.title} className={`capability reveal reveal-delay-${(i % 3) + 1}`}>
            {Icon && (
              <span className="icon-tile" aria-hidden="true"><Icon size={20} strokeWidth={1.6} /></span>
            )}
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
