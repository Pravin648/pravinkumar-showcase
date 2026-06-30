import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import './SkillBar.scss';

interface SkillBarProps { name: string; level: number; }

export default function SkillBar({ name, level }: SkillBarProps) {
  const { ref, inView } = useInView(0.3);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__label">
        <span>{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div
        className="skill-bar__track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency ${level}%`}
      >
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
