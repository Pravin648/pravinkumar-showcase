import SectionWrapper from '../common/SectionWrapper';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';
import './Projects.scss';

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="projects" ariaLabel="Featured Projects">
      <div className="projects__inner">
        <p className="section-eyebrow">Featured Projects</p>
        <h2 className="section-title projects__title">Enterprise-grade products I&apos;ve architected and shipped</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
