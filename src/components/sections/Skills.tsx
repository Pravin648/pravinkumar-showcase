import SectionWrapper from '../common/SectionWrapper';
import { skillCategories } from '../../data/skills';
import './Skills.scss';

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="skills" ariaLabel="Skills">
      <div className="skills__inner">
        <p className="section-eyebrow">Core Technical Skills</p>
        <h2 className="section-title skills__title">Technical expertise refined over 10+ years</h2>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skills__category">
              <h3>{cat.category}</h3>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
