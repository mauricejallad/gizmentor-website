import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/useLocale';
import CircleIcon from './CircleIcon';

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
        {icon && <CircleIcon icon="external" />}
        <span>{children}</span>
        <span className="sr-only"> {t.common.opensNewTab}</span>
      </a>
    );
  }
  const target = to.startsWith('#') ? to : localize(to);
  const Tag = to.startsWith('#') ? 'a' : Link;
  const linkProps = to.startsWith('#') ? { href: target } : { to: target };
  return (
    <Tag {...linkProps} className={cls} {...rest}>
      {icon && <CircleIcon icon={to.startsWith('#') ? 'down' : 'right'} />}
      <span>{children}</span>
    </Tag>
  );
}
