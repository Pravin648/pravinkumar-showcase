import FormatQuoteIcon from '@mui/icons-material/FormatQuoteRounded';
import SectionWrapper from '../common/SectionWrapper';
import { testimonials } from '../../data/testimonials';
import './Testimonials.scss';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="testimonials" ariaLabel="Testimonials">
      <div className="testimonials__inner">
        <p className="section-eyebrow">Testimonials</p>
        <h2 className="section-title testimonials__title">What collaborators say about working with me</h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonials__card">
              <FormatQuoteIcon className="testimonials__quote-icon" aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}{t.company ? ` · ${t.company}` : ''}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
