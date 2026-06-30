import { useState, FormEvent } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SectionWrapper from '../common/SectionWrapper';
import { contact, personal } from '../../data/siteData';
import './Contact.scss';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // NOTE: Wire this up to a form backend (Formspree, EmailJS, or your own API) before going live.
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact" className="contact" ariaLabel="Contact">
      <div className="contact__inner">
        <div className="contact__intro">
          <p className="section-eyebrow">{contact.eyebrow}</p>
          <h2 className="section-title contact__title">{contact.title}</h2>
          <p className="contact__text">{contact.text}</p>

          <div className="contact__links">
            <a href={`mailto:${personal.email}`}><EmailIcon fontSize="small" /> {personal.email}</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="small" /> LinkedIn</a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} aria-label="Contact form">
          <TextField
            label="Your Name"
            required
            fullWidth
            margin="normal"
            value={form.name}
            onChange={handleChange('name')}
            inputProps={{ 'aria-label': 'Your Name' }}
          />
          <TextField
            label="Your Email"
            type="email"
            required
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange('email')}
            inputProps={{ 'aria-label': 'Your Email' }}
          />
          <TextField
            label="Message"
            required
            fullWidth
            multiline
            minRows={4}
            margin="normal"
            value={form.message}
            onChange={handleChange('message')}
            inputProps={{ 'aria-label': 'Message' }}
          />
          <Button type="submit" variant="contained" size="large" className="contact__submit">
            {contact.cta}
          </Button>
        </form>
      </div>

      <Snackbar open={submitted} autoHideDuration={4000} onClose={() => setSubmitted(false)}>
        <Alert severity="success" onClose={() => setSubmitted(false)}>
          Thanks for reaching out! I'll get back to you shortly. (Connect a form backend to enable real delivery.)
        </Alert>
      </Snackbar>
    </SectionWrapper>
  );
}
