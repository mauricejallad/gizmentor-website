import BrandMark from '../brand/BrandMark';

/**
 * First-load intro: the mark draws itself on the brand slate, then the curtain lifts.
 * Pure CSS, so it plays on the prerendered page without waiting for JavaScript. It sits in the
 * layout, which stays mounted across client navigations, so it plays once per full page load.
 */
export default function IntroCurtain() {
  return (
    <div className="intro-curtain" aria-hidden="true">
      <BrandMark variant="outline" className="intro-mark" />
    </div>
  );
}
