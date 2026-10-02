/**
 * The GizMentor "G" mark from the emblem (ring, bar and the inner peaks) as one flat shape.
 * Used large and decorative: filled in the home hero, outlined in the intro and the inner-page heroes.
 * variant: 'fill' | 'outline'
 */
export default function BrandMark({ variant = 'fill', className = '' }) {
  return (
    <svg
      viewBox="13 13 75 75"
      className={`brand-mark brand-mark-${variant} ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <path pathLength="1" d="M86.8,50.32c0,10.08-4.09,19.2-10.69,25.81-6.61,6.61-15.73,10.69-25.81,10.69s-19.2-4.09-25.81-10.69c-6.61-6.61-10.69-15.73-10.69-25.81s4.09-19.2,10.69-25.81c6.61-6.61,15.73-10.69,25.81-10.69s19.2,4.09,25.81,10.69l-10.32,10.32c-3.96-3.96-9.44-6.41-15.49-6.41s-11.52,2.45-15.49,6.41c-3.96,3.96-6.41,9.44-6.41,15.49s2.45,11.52,6.41,15.49,9.44,6.41,15.49,6.41,11.52-2.45,15.49-6.41c3.96-3.96,6.41-9.44,6.41-15.49h14.6Z" />
      <path pathLength="1" d="M86.51,45.52h-23.65v12.8h23.15c.52-2.59.8-5.26.8-8,0-1.63-.11-3.23-.3-4.8Z" />
      <polygon pathLength="1" points="32.77 58.32 42.35 34.32 46.35 44.32 40.74 58.32 32.77 58.32" />
      <polygon pathLength="1" points="58.35 34.32 48.37 59.27 52.4 69.37 59.45 51.56 62.35 58.32 67.94 58.32 58.35 34.32" />
    </svg>
  );
}
