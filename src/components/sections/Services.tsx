import ReactIcon from '@mui/icons-material/CodeRounded';
import ArchitectureIcon from '@mui/icons-material/AccountTreeRounded';
import TsIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import PerfIcon from '@mui/icons-material/SpeedRounded';
import ReviewIcon from '@mui/icons-material/RateReviewRounded';
import ConsultIcon from '@mui/icons-material/LightbulbRounded';
import UiIcon from '@mui/icons-material/AutoAwesomeRounded';
import EnterpriseIcon from '@mui/icons-material/ApartmentRounded';
import SectionWrapper from '../common/SectionWrapper';
import { services } from '../../data/services';
import './Services.scss';

const ICONS: Record<string, React.ElementType> = {
  react: ReactIcon,
  architecture: ArchitectureIcon,
  typescript: TsIcon,
  performance: PerfIcon,
  review: ReviewIcon,
  consulting: ConsultIcon,
  ui: UiIcon,
  enterprise: EnterpriseIcon,
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="services" ariaLabel="Services">
      <div className="services__inner">
        <p className="section-eyebrow">Services</p>
        <h2 className="section-title services__title">How I can help your team ship better frontend, faster</h2>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div key={service.title} className="services__card">
                <div className="services__icon"><Icon fontSize="medium" /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
