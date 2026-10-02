import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/useLocale';
import { ventures } from '../../config/site';
import CircleIcon from '../ui/CircleIcon';
import ThemedImage from '../ui/ThemedImage';
import easelectDark from '../../assets/easelect/easelect-in-hand.webp';
import easelectLight from '../../assets/easelect/easelect-in-hand-light.webp';
import magfusionImg from '../../assets/magfusion/magfusion-running.webp';

/** Easelect's photo shows the app in the active theme; MagFusion has one photo for both. */
const images = { easelect: { light: easelectLight, dark: easelectDark }, magfusion: { light: magfusionImg, dark: magfusionImg } };

/** White venture tiles along the bottom of the home hero; the photo rises to fill the tile on hover. */
export default function RisingBanners() {
  const { t, to } = useLocale();
  return (
    <ul className="rising-banners">
      {['easelect', 'magfusion'].map((key, i) => (
        <li key={key} style={{ '--i': i }}>
          <Link to={to(ventures[key].path)} className="rising-banner" data-venture={key}>
            <span className="rising-banner-media"><ThemedImage light={images[key].light} dark={images[key].dark} alt="" width="800" height="800" eager /></span>
            <span className="rising-banner-copy">
              <span className="rising-banner-title latin">{ventures[key].name}</span>
              <span className="rising-banner-kind">{t.common.ventureCards[key].kind}</span>
              <span className="rising-banner-count">0{i + 1}</span>
            </span>
            <CircleIcon className="rising-banner-icon" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
