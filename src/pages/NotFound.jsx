import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="page-hero not-found" aria-labelledby="nf-title">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 id="nf-title" className="display display-md">This page doesn’t exist.</h1>
        <p className="hero-lead">It may have moved as part of our new website.</p>
        <div className="btn-row">
          <Button to="/">Go to homepage</Button>
          <Button to="/ventures" variant="secondary">Our ventures</Button>
        </div>
      </div>
    </section>
  );
}
