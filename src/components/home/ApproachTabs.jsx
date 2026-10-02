import { useId, useState } from 'react';
import { useLocale } from '../../i18n/useLocale';

/**
 * Pill tabs over a row of grey cards, each ending in a large red index —
 * "How we work" (Build / Launch / Scale) and "Capabilities".
 */
export default function ApproachTabs() {
  const { t } = useLocale();
  const a = t.home.approach;
  const base = useId();
  const tabs = [
    { key: 'model', label: a.tabs.model, items: t.common.pillars },
    { key: 'capabilities', label: a.tabs.capabilities, items: t.common.capabilities },
  ];
  const [active, setActive] = useState('model');
  return (
    <div className="approach">
      <div className="tab-list reveal" role="tablist" aria-label={a.eyebrow}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            id={`${base}-${tab.key}-tab`}
            aria-controls={`${base}-${tab.key}`}
            aria-selected={active === tab.key}
            className="tab"
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <ol
          key={tab.key}
          id={`${base}-${tab.key}`}
          role="tabpanel"
          aria-labelledby={`${base}-${tab.key}-tab`}
          hidden={active !== tab.key}
          className="index-cards"
        >
          {tab.items.map((item, i) => (
            <li key={item.title} className="index-card" style={{ '--i': i }}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="index-card-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </li>
          ))}
        </ol>
      ))}
    </div>
  );
}
