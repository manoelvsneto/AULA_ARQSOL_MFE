// App.jsx — wrapper standalone para desenvolvimento isolado do MFE
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import CadastroVeiculo from './components/CadastroVeiculo';

const theme = createTheme({
  palette: { primary: { main: '#1565C0' } },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CadastroVeiculo />
    </ThemeProvider>
  );
}
