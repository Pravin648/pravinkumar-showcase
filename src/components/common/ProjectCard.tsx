import { Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/LaunchRounded';
import type { Project } from '../../data/projects';
import './ProjectCard.scss';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__screenshot" role="img" aria-label={`${project.title} screenshot placeholder`}>
        <span>{project.title}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__overview">{project.overview}</p>

        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} size="small" className="project-card__chip" />
          ))}
        </div>

        <dl className="project-card__meta">
          <div>
            <dt>Challenges Solved</dt>
            <dd>{project.challenges}</dd>
          </div>
          <div>
            <dt>Business Impact</dt>
            <dd>{project.impact}</dd>
          </div>
        </dl>

        <div className="project-card__links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
            <GitHubIcon fontSize="small" /> Code
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
            <LaunchIcon fontSize="small" /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
