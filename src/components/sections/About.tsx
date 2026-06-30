import SectionWrapper from '../common/SectionWrapper';
import { about } from '../../data/siteData';
import './About.scss';

export default function About() {
  return (
    <SectionWrapper id="about" className="about" ariaLabel="About Me">
      <div className="about__inner">
        <p className="section-eyebrow">{about.eyebrow}</p>
        <h2 className="section-title about__title">{about.title}</h2>

        <div className="about__grid">
          <div className="about__summary">
            {about.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="about__side">
            <div className="about__card">
              <h3>{about.expertise.title}</h3>
              <div className="about__expertise-tags">
                {about.expertise.items.map((item) => (
                  <span key={item} className="about__tag">{item}</span>
                ))}
              </div>
            </div>
            <div className="about__card">
              <h3>{about.languages.title}</h3>
              <ul>
                {about.languages.items.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
