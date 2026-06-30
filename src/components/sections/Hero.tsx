import { motion } from 'framer-motion';
import { hero, personal } from '../../data/siteData';
import AnimatedCounter from '../common/AnimatedCounter';
import './Hero.scss';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          className="hero__subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="btn btn--primary">{hero.ctas.hire}</a>
          <a
            href={personal.resumeUrl}
            className="btn btn--outline"
            download="Pravinkumar_Subbu_Sing_Resume.pdf"
          >
            {hero.ctas.resume}
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value gradient-text">
                <AnimatedCounter value={parseInt(stat.value)} suffix={stat.value.replace(/[0-9]/g, '')} />
              </span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
