import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

const icons = { right: ArrowRight, external: ArrowUpRight, down: ChevronDown };

/** The round arrow used on buttons, banners and cards. Purely visual: the parent is the control. */
export default function CircleIcon({ icon = 'right', className = '' }) {
  const Icon = icons[icon];
  return (
    <span className={`circle-icon ${className}`.trim()} aria-hidden="true">
      <Icon size={18} strokeWidth={1.6} className={icon === 'down' ? '' : 'flip-rtl'} />
    </span>
  );
}
