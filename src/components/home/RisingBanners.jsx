import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/useLocale';
import { ventures } from '../../config/site';
import CircleIcon from '../ui/CircleIcon';
import easelectImg from '../../assets/easelect/easelect-in-hand.webp';
import magfusionImg from '../../assets/magfusion/magfusion-running.webp';

const images = { easelect: easelectImg, magfusion: magfusionImg };

/** White venture tiles along the bottom of the home hero; the photo rises to fill the tile on hover. */
export default function RisingBanners() {
  const { t, to } = useLocale();
  return (
    <ul className="rising-banners">
      {['easelect', 'magfusion'].map((key, i) => (
        <li key={key} style={{ '--i': i }}>
          <Link to={to(ventures[key].path)} className="rising-banner" data-venture={key}>
            <span className="rising-banner-media"><img src={images[key]} alt="" width="800" height="800" loading="eager" /></span>
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
