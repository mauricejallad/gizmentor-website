import { useLocale } from '../../i18n/useLocale';
import { screens } from './screens';

/** One app screen in a rounded phone-style frame. */
export function PhoneShot({ name, className = '', eager = false }) {
  const { t } = useLocale();
  const s = screens[name];
  return (
    <div className={`phone-shot ${className}`.trim()}>
      <img
        src={s.src}
        alt={t.easelect.screens[name]}
        width={s.w}
        height={s.h}
        loading={eager ? 'eager' : 'lazy'}
        {...(eager ? { fetchPriority: 'high' } : {})}
      />
    </div>
  );
}

/** Hero composition: the app's home screen with a product result in front of it. */
export default function AppScreens() {
  const { t } = useLocale();
  return (
    <figure className="app-screens">
      <div className="app-screens-stage">
        <PhoneShot name="home" className="is-back" eager />
        <PhoneShot name="product" className="is-front" eager />
      </div>
      <figcaption className="app-screens-caption">{t.easelect.screens.caption}</figcaption>
    </figure>
  );
}
