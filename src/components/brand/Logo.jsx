import { Link } from 'react-router-dom';
import Emblem from './Emblem';

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" aria-label="GizMentor — home" onClick={onClick}>
      <Emblem size={30} />
      <span className="logo-word">GizMentor</span>
    </Link>
  );
}
