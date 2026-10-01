import { Link } from 'react-router-dom';
import Emblem from './Emblem';
import { useLocale } from '../../i18n/useLocale';

export default function Logo({ onClick }) {
  const { t, to } = useLocale();
  return (
    <Link to={to('/')} className="logo" aria-label={t.common.homeAria} onClick={onClick}>
      <Emblem size={28} />
      <span className="logo-word">GizMentor</span>
    </Link>
  );
}
