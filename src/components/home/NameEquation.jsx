import { useLocale } from '../../i18n/useLocale';

/** "Gizmo + Mentor = GizMentor" — always read left to right, including on the Arabic site. */
export default function NameEquation() {
  const { t } = useLocale();
  const n = t.home.name;
  return (
    <figure className="name-equation reveal">
      <p className="name-eq" dir="ltr" lang="en">
        <span className="name-part">{n.gizmo}</span>
        <span className="name-op" aria-hidden="true">+</span>
        <span className="name-part">{n.mentor}</span>
        <span className="name-op" aria-hidden="true">=</span>
        <span className="name-result">GizMentor<span className="name-dot" aria-hidden="true" /></span>
      </p>
      <figcaption className="name-caption">{n.caption}</figcaption>
    </figure>
  );
}
