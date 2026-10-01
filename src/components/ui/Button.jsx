import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';

/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * Pass `to` for internal routes (locale-neutral, e.g. '/contact'), `href` for external links.
 */
export default function Button({ to, href, variant = 'primary', icon = true, children, className = '', ...rest }) {
  const { t, to: localize } = useLocale();
  const cls = `btn btn-${variant} ${className}`.trim();
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener" {...rest}>
        <span>{children}</span>
        {icon && <ArrowUpRight size={16} aria-hidden="true" className="flip-rtl" />}
        <span className="sr-only"> {t.common.opensNewTab}</span>
      </a>
    );
  }
  const target = to.startsWith('#') ? to : localize(to);
  const Tag = to.startsWith('#') ? 'a' : Link;
  const linkProps = to.startsWith('#') ? { href: target } : { to: target };
  return (
    <Tag {...linkProps} className={cls} {...rest}>
      <span>{children}</span>
      {icon && <ArrowRight size={16} aria-hidden="true" className="flip-rtl" />}
    </Tag>
  );
}
