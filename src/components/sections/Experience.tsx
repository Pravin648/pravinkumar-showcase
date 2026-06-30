import SectionWrapper from '../common/SectionWrapper';
import { experience } from '../../data/experience';
import './Experience.scss';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="experience" ariaLabel="Experience">
      <div className="experience__inner">
        <p className="section-eyebrow">Professional Experience</p>
        <h2 className="section-title experience__title">10+ years of frontend engineering across enterprise platforms</h2>

        <ol className="experience__timeline">
          {experience.map((item) => (
            <li key={item.period} className="experience__item">
              <div className="experience__marker" aria-hidden="true" />
              <div className="experience__content">
                <span className="experience__period">{item.period}</span>
                <h3>{item.role}</h3>
                <p className="experience__company">
                  {item.companyFull ? `${item.companyFull} (${item.company})` : item.company}
                  {' · '}
                  {item.location}
                </p>
                {item.context && (
                  <p className="experience__context">{item.context}</p>
                )}
                {item.keyProjects && item.keyProjects.length > 0 && (
                  <div className="experience__projects">
                    <h4>Key Projects</h4>
                    <ul>
                      {item.keyProjects.map((proj) => (
                        <li key={proj.title}>
                          <strong>{proj.title}:</strong> {proj.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="experience__responsibilities">
                  <h4>Impact &amp; Responsibilities</h4>
                  <ul>
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="experience__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="experience__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
