import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/**
 * variant: 'primary' | 'secondary' | 'ghost' | 'easelect'
 * Pass `to` for internal routes, `href` for external links.
 */
export default function Button({ to, href, variant = 'primary', icon = true, children, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`.trim();
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener" {...rest}>
        <span>{children}</span>
        {icon && <ArrowUpRight size={16} aria-hidden="true" />}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link to={to} className={cls} {...rest}>
      <span>{children}</span>
      {icon && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}
