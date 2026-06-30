import SectionWrapper from '../common/SectionWrapper';
import { awards } from '../../data/achievements';
import './Achievements.scss';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="achievements" ariaLabel="Achievements">
      <div className="achievements__inner">
        <p className="section-eyebrow">Achievements</p>
        <h2 className="section-title achievements__title">Recognition & Awards</h2>
        <div className="achievements__grid">
          {awards.map((award) => (
            <div key={`${award.title}-${award.period}`} className="achievements__card">
              <span className="achievements__trophy" aria-hidden="true">🏆</span>
              <h3 className="achievements__award-title">{award.title}</h3>
              <p className="achievements__org">{award.org}</p>
              <p className="achievements__period">{award.period}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
