import { useState, useEffect } from 'react';
import { IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import ThemeToggle from '../common/ThemeToggle';
import { personal } from '../../data/siteData';
import './Navbar.scss';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo" aria-label={`${personal.name} — home`}>
        Pravinkumar<span className="gradient-text"> S</span>
      </a>

      <nav className="navbar__links" aria-label="Primary navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <ThemeToggle />
        <a className="navbar__cta" href="#contact">
          Contact Me
        </a>
        <IconButton
          className="navbar__menu-btn"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="navbar__drawer">
          <IconButton aria-label="Close navigation menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItemButton key={link.href} component="a" href={link.href} onClick={() => setOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>
    </header>
  );
}
