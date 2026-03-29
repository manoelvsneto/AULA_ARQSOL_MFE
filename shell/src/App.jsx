import React, { Suspense, lazy, useState } from 'react';
import {
  AppBar,
  Box,
  Chip,
  CircularProgress,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GavelIcon from '@mui/icons-material/Gavel';
import MenuIcon from '@mui/icons-material/Menu';

// Carregamento remoto dos Microfrontends via Module Federation
const CadastroVeiculo = lazy(() => import('mfeCadastro/CadastroVeiculo'));
const LanceLeilao = lazy(() => import('mfeLeilao/LanceLeilao'));

// Tema customizado Material UI
const theme = createTheme({
  palette: {
    primary: { main: '#1565C0' },
    secondary: { main: '#E65100' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

const navItems = [
  { label: 'Cadastro de Veículos', icon: <DirectionsCarIcon />, value: 0 },
  { label: 'Leilão', icon: <GavelIcon />, value: 1 },
];

function LoadingFallback() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 300,
        gap: 2,
      }}
    >
      <CircularProgress size={48} />
      <Typography variant="body2" color="text.secondary">
        Carregando módulo remoto…
      </Typography>
    </Box>
  );
}

// AppContent separado para que hooks MUI funcionem dentro do ThemeProvider
function AppContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box className="min-h-screen bg-gray-100">
      {/* ── AppBar ── */}
      <AppBar position="fixed" sx={{ backgroundColor: '#1565C0' }}>
        <Toolbar>
          {/* Botão hamburguer — visível apenas em mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 1, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <GavelIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            AutoLeilão — Plataforma de Leilão de Veículos
          </Typography>

          {/* Tabs — visíveis apenas em desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tabs
              value={activeTab}
              onChange={(_, v) => setActiveTab(v)}
              textColor="inherit"
              TabIndicatorProps={{ style: { backgroundColor: '#FF6D00' } }}
            >
              {navItems.map((item) => (
                <Tab
                  key={item.value}
                  icon={item.icon}
                  label={item.label}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── Drawer Mobile ── */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 256, pt: 2 }}>
          <Typography variant="h6" sx={{ px: 2, pb: 1, fontWeight: 'bold', color: '#1565C0' }}>
            AutoLeilão
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.value} disablePadding>
                <ListItemButton
                  selected={activeTab === item.value}
                  onClick={() => {
                    setActiveTab(item.value);
                    setDrawerOpen(false);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* ── Conteúdo Principal ── */}
      <Box sx={{ pt: '64px' }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          {/* Chips informativos sobre a arquitetura MFE */}
          <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            <Chip label="Shell (Host) :4000" color="default" size="small" />
            <Chip label="MFE: mfe-cadastro :3001" color="primary" variant="outlined" size="small" />
            <Chip label="MFE: mfe-leilao :3002" color="secondary" variant="outlined" size="small" />
          </Box>

          <Box sx={{ bgcolor: 'white', borderRadius: 3, boxShadow: 1, overflow: 'hidden' }}>
            {/* Lazy loading dos MFEs remotos com fallback */}
            <Suspense fallback={<LoadingFallback />}>
              {activeTab === 0 && <CadastroVeiculo />}
              {activeTab === 1 && <LanceLeilao />}
            </Suspense>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
}
