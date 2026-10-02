/**
 * Two versions of one image, for the light and dark themes. Both are in the markup; CSS shows the one for
 * the active theme, and because the hidden one is display:none with loading="lazy", browsers don't download it.
 */
export default function ThemedImage({ light, dark, alt, width, height, className = '', eager = false }) {
  const common = { alt, width, height, loading: eager ? 'eager' : 'lazy', decoding: 'async' };
  return (
    <>
      <img src={light} className={`theme-img-light ${className}`.trim()} {...common} />
      <img src={dark} className={`theme-img-dark ${className}`.trim()} {...common} />
    </>
  );
}
