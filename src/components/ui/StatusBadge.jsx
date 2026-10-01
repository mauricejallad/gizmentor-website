export default function StatusBadge({ label, tone = 'live' }) {
  return (
    <span className={`status status-${tone}`}>
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  );
}

export function StatusList({ items = [] }) {
  return (
    <ul className="status-list" aria-label="Status">
      {items.map((s) => (
        <li key={s.label}><StatusBadge {...s} /></li>
      ))}
    </ul>
  );
}
