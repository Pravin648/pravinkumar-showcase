import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

/** Counts up to `value` once visible. Pure CSS/JS — no extra dependency needed. */
export default function AnimatedCounter({ value, suffix = '', duration = 1400 }: Props) {
  const { ref, inView } = useInView(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {display}
      {suffix}
    </span>
  );
}
