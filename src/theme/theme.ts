import { createTheme, ThemeOptions } from '@mui/material/styles';

const shared: ThemeOptions = {
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Sora', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Sora', sans-serif", fontWeight: 600 },
    button: { fontWeight: 600, textTransform: 'none' as const },
  },
  shape: { borderRadius: 12 },
};

export function getMuiTheme(mode: 'dark' | 'light') {
  return createTheme({
    ...shared,
    palette: {
      mode,
      primary: { main: '#3DDC97' },
      secondary: { main: '#4C8DFF' },
      background:
        mode === 'dark'
          ? { default: '#0B1320', paper: '#111B2E' }
          : { default: '#F7F9FC', paper: '#FFFFFF' },
    },
  });
}
