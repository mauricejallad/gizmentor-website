import { Compass, PenTool, Sparkles, Cpu, ShoppingBag, Rocket } from 'lucide-react';
import { capabilities } from '../../content/corporate';

const icons = { Compass, PenTool, Sparkles, Cpu, ShoppingBag, Rocket };

export default function CapabilityGrid() {
  return (
    <ul className="capabilities">
      {capabilities.map((c, i) => {
        const Icon = icons[c.icon];
        return (
          <li key={c.title} className={`capability reveal reveal-delay-${(i % 3) + 1}`}>
            <Icon size={22} strokeWidth={1.6} aria-hidden="true" className="capability-icon" />
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
