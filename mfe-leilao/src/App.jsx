// App.jsx — wrapper standalone para desenvolvimento isolado do MFE
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import LanceLeilao from './components/LanceLeilao';

const theme = createTheme({
  palette: { secondary: { main: '#E65100' } },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanceLeilao />
    </ThemeProvider>
  );
}
