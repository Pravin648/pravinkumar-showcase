import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/** Wraps each page section with a semantic <section>, anchor id for nav, and fade-up entrance. */
export default function SectionWrapper({ id, children, className = '', ariaLabel }: Props) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
