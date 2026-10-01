const stages = [
  {
    title: 'Ask naturally',
    items: ['Explain what you need in your own words'],
  },
  {
    title: 'Understand intent',
    items: ['Translate the need into relevant product requirements'],
  },
  {
    title: 'Research & compare',
    items: [
      'Research suitable products',
      'Analyse specifications and expert information',
      'Compare real-world feedback',
      'Evaluate alternatives',
    ],
  },
  {
    title: 'Decide with confidence',
    items: [
      'Check prices and availability',
      'Select the product that fits your needs',
      'Continue to participating retailers',
    ],
  },
];

export default function JourneySteps() {
  return (
    <ol className="journey">
      {stages.map((s, i) => (
        <li key={s.title} className={`journey-stage reveal reveal-delay-${(i % 3) + 1}`}>
          <span className="journey-index" aria-hidden="true">{i + 1}</span>
          <h3>{s.title}</h3>
          <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
        </li>
      ))}
    </ol>
  );
}
