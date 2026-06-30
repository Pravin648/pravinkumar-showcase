import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import { useThemeMode } from '../../theme/ThemeContext';

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  return (
    <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={toggleMode}
        aria-label="Toggle color theme"
        sx={{
          color: 'var(--text-primary)',
          border: '1px solid var(--border-subtle)',
          '&:hover': { borderColor: 'var(--accent-primary)' },
        }}
      >
        {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
