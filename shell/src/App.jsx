import React, { Suspense, lazy, useState } from 'react';
import {
  AppBar,
  Box,
  Chip,
  CircularProgress,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GavelIcon from '@mui/icons-material/Gavel';
import MenuIcon from '@mui/icons-material/Menu';
import StorefrontIcon from '@mui/icons-material/Storefront';

// Carregamento remoto dos Microfrontends via Module Federation
const CadastroVeiculo = lazy(() => import('mfeCadastro/CadastroVeiculo'));
const LanceLeilao = lazy(() => import('mfeLeilao/LanceLeilao'));

const SIDEBAR_WIDTH = 240;

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
  {
    label: 'Cadastro de Veículos',
    description: 'Gerenciar veículos do leilão',
    icon: <DirectionsCarIcon />,
    value: 0,
    mfe: 'mfe-cadastro :3001',
    color: 'primary',
  },
  {
    label: 'Leilão ao Vivo',
    description: 'Dar lances nos lotes ativos',
    icon: <GavelIcon />,
    value: 1,
    mfe: 'mfe-leilao :3002',
    color: 'secondary',
  },
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

// ── Conteúdo do menu lateral (reutilizado no Drawer permanente e temporário) ──
function SidebarContent({ activeTab, onSelect }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo */}
      <Box
        sx={{
          px: 2,
          py: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          bgcolor: 'primary.main',
          color: 'white',
        }}
      >
        <StorefrontIcon />
        <Box>
          <Typography variant="subtitle1" fontWeight={700} lineHeight={1.2}>
            AutoLeilão
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            Plataforma MFE
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Itens de navegação */}
      <Box sx={{ px: 1, pt: 1.5, flex: 1 }}>
        <Typography
          variant="overline"
          sx={{ px: 1, color: 'text.disabled', fontSize: '0.65rem', display: 'block', mb: 0.5 }}
        >
          Módulos
        </Typography>

        <List disablePadding>
          {navItems.map((item) => {
            const isActive = activeTab === item.value;
            return (
              <ListItem key={item.value} disablePadding sx={{ mb: 0.5 }}>
                <Tooltip title={item.mfe} placement="right" arrow>
                  <ListItemButton
                    selected={isActive}
                    onClick={() => onSelect(item.value)}
                    sx={{
                      borderRadius: 2,
                      '&.Mui-selected': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        '& .MuiListItemIcon-root': { color: 'white' },
                        '&:hover': { bgcolor: 'primary.dark' },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 38,
                        color: isActive ? 'white' : 'text.secondary',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      secondary={!isActive ? item.description : null}
                      primaryTypographyProps={{ fontWeight: isActive ? 700 : 400, fontSize: '0.9rem' }}
                      secondaryTypographyProps={{ fontSize: '0.72rem' }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Divider />

      {/* Chips de arquitetura no rodapé do menu */}
      <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="overline" sx={{ color: 'text.disabled', fontSize: '0.62rem' }}>
          Arquitetura MFE
        </Typography>
        <Chip label="Shell (Host) :4000" size="small" variant="outlined" sx={{ justifyContent: 'flex-start' }} />
        <Chip label="mfe-cadastro :3001" size="small" color="primary" variant="outlined" sx={{ justifyContent: 'flex-start' }} />
        <Chip label="mfe-leilao :3002" size="small" color="secondary" variant="outlined" sx={{ justifyContent: 'flex-start' }} />
      </Box>
    </Box>
  );
}

// AppContent separado para que hooks MUI funcionem dentro do ThemeProvider
function AppContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (value) => {
    setActiveTab(value);
    setMobileOpen(false);
  };

  const activeItem = navItems[activeTab];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'grey.100' }}>
      {/* ── AppBar ── */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          backgroundColor: '#1565C0',
          boxShadow: 2,
        }}
      >
        <Toolbar>
          {/* Hamburguer — apenas mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 1, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Espaço do sidebar no AppBar — apenas desktop */}
          <Box sx={{ width: SIDEBAR_WIDTH, display: { xs: 'none', md: 'block' } }} />

          <GavelIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            {activeItem.label}
          </Typography>

          <Chip
            label={activeItem.mfe}
            size="small"
            sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', display: { xs: 'none', sm: 'flex' } }}
          />
        </Toolbar>
      </AppBar>

      {/* ── Sidebar Permanente (desktop) ── */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <Toolbar /> {/* empurra o conteúdo abaixo do AppBar */}
        <SidebarContent activeTab={activeTab} onSelect={handleSelect} />
      </Drawer>

      {/* ── Drawer Temporário (mobile) ── */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH },
        }}
      >
        <SidebarContent activeTab={activeTab} onSelect={handleSelect} />
      </Drawer>

      {/* ── Área de Conteúdo Principal ── */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: '64px', // altura do AppBar
          minWidth: 0,
        }}
      >
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Box sx={{ bgcolor: 'white', borderRadius: 3, boxShadow: 1, overflow: 'hidden' }}>
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
