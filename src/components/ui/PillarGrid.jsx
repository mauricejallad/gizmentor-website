import { pillars } from '../../content/corporate';

export default function PillarGrid() {
  return (
    <ol className="pillars">
      {pillars.map((p, i) => (
        <li key={p.key} className={`pillar reveal reveal-delay-${i + 1}`}>
          <span className="pillar-index" aria-hidden="true">0{i + 1}</span>
          <h3 className="pillar-title">{p.title}</h3>
          <p>{p.body}</p>
        </li>
      ))}
    </ol>
  );
}
