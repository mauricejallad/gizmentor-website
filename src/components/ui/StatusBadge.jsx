import { useLocale } from '../../i18n/useLocale';

export default function StatusBadge({ label, tone = 'live' }) {
  return (
    <span className={`status status-${tone}`}>
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  );
}

/** items: [{ key, tone }] from config/site.js; labels come from content.common.status. */
export function StatusList({ items = [] }) {
  const { t } = useLocale();
  return (
    <ul className="status-list" aria-label={t.common.statusAria}>
      {items.map((s) => (
        <li key={s.key}><StatusBadge label={t.common.status[s.key]} tone={s.tone} /></li>
      ))}
    </ul>
  );
}
