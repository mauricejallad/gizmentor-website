import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import { useLocale } from '../i18n/useLocale';

export default function NotFound() {
  const { t } = useLocale();
  const n = t.notFound;
  return (
    <PageHero
      id="nf-title"
      className="not-found"
      eyebrow={n.eyebrow}
      title={n.title}
      lead={n.lead}
      actions={
        <>
          <Button to="/">{n.home}</Button>
          <Button to="/ventures" variant="secondary">{n.ventures}</Button>
        </>
      }
    />
  );
}
