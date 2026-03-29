import React, { useEffect, useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// ── Dados Iniciais ────────────────────────────────────────────────────────────
const INITIAL_VEHICLES = [
  {
    id: 1,
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2021,
    placa: 'ABC-1234',
    cor: 'Branco',
    tipo: 'Carro',
    valorMinimo: 45000,
    descricao: 'Veículo em ótimo estado, apenas um dono. Placa par, revisões em dia.',
    lanceAtual: 45000,
    totalLances: 0,
    bids: [],
    tempoRestante: 3600,
    status: 'ativo',
  },
  {
    id: 2,
    marca: 'Toyota',
    modelo: 'Hilux',
    ano: 2020,
    placa: 'DEF-5678',
    cor: 'Prata',
    tipo: 'Pickup',
    valorMinimo: 180000,
    descricao: 'Caminhonete 4x4 com pouco uso. Segundo dono, documentação ok.',
    lanceAtual: 185000,
    totalLances: 3,
    bids: [
      { bidder: 'Carlos M.', valor: 185000, time: '14:32' },
      { bidder: 'Ana S.', valor: 182000, time: '14:28' },
      { bidder: 'Pedro L.', valor: 180000, time: '14:20' },
    ],
    tempoRestante: 7200,
    status: 'ativo',
  },
  {
    id: 3,
    marca: 'Honda',
    modelo: 'CB 500',
    ano: 2022,
    placa: 'GHI-9012',
    cor: 'Preto',
    tipo: 'Moto',
    valorMinimo: 28000,
    descricao: 'Moto em excelente estado, sem sinistro. Pneus novos, revisão feita.',
    lanceAtual: 31500,
    totalLances: 5,
    bids: [
      { bidder: 'Lucas R.', valor: 31500, time: '15:10' },
      { bidder: 'Mariana T.', valor: 30000, time: '15:05' },
      { bidder: 'João B.', valor: 29500, time: '15:01' },
      { bidder: 'Fernanda C.', valor: 29000, time: '14:55' },
      { bidder: 'Roberto A.', valor: 28500, time: '14:48' },
    ],
    tempoRestante: 540,
    status: 'ativo',
  },
  {
    id: 4,
    marca: 'Volkswagen',
    modelo: 'Polo',
    ano: 2019,
    placa: 'JKL-3456',
    cor: 'Vermelho',
    tipo: 'Carro',
    valorMinimo: 55000,
    descricao: 'Hatch compacto com câmbio automático. Único dono.',
    lanceAtual: 60000,
    totalLances: 2,
    bids: [
      { bidder: 'Beatriz F.', valor: 60000, time: '10:45' },
      { bidder: 'Rafael D.', valor: 57000, time: '10:30' },
    ],
    tempoRestante: 0,
    status: 'encerrado',
  },
];

// ── Utilitários ───────────────────────────────────────────────────────────────
const formatCurrency = (value) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const formatTime = (seconds) => {
  if (seconds <= 0) return '00:00:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
};

const getTimerColor = (seconds) => {
  if (seconds <= 0) return 'error';
  if (seconds < 600) return 'warning';
  return 'success';
};

// ── Componente Principal ──────────────────────────────────────────────────────
export default function LanceLeilao() {
  const [vehicles, setVehicles] = useState(INITIAL_VEHICLES);
  const [selectedId, setSelectedId] = useState(null);
  const [bidderName, setBidderName] = useState('');
  const [bidValue, setBidValue] = useState('');
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Veículo atualmente selecionado (derivado do estado)
  const selectedVehicle = vehicles.find((v) => v.id === selectedId) ?? null;

  // ── Cronômetro regressivo ─────────────────────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setVehicles((prev) =>
        prev.map((v) => {
          if (v.status === 'encerrado' || v.tempoRestante <= 0)
            return { ...v, tempoRestante: 0, status: 'encerrado' };
          return { ...v, tempoRestante: v.tempoRestante - 1 };
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ── Validação do Lance ────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!bidderName.trim()) newErrors.bidderName = 'Informe seu nome';
    if (!bidValue || Number(bidValue) <= 0) {
      newErrors.bidValue = 'Informe um valor válido';
    } else if (Number(bidValue) <= selectedVehicle.lanceAtual) {
      newErrors.bidValue = `Lance deve ser maior que ${formatCurrency(selectedVehicle.lanceAtual)}`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Registrar Lance ───────────────────────────────────────────────────────
  const handleBid = () => {
    if (!selectedVehicle) return;

    if (selectedVehicle.status === 'encerrado') {
      setSnackbar({ open: true, message: 'Este leilão foi encerrado!', severity: 'error' });
      return;
    }

    if (!validate()) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const valorLance = Number(bidValue);

    const newBid = { bidder: bidderName.trim(), valor: valorLance, time: timeStr };

    setVehicles((prev) =>
      prev.map((v) =>
        v.id === selectedId
          ? { ...v, lanceAtual: valorLance, totalLances: v.totalLances + 1, bids: [newBid, ...v.bids] }
          : v
      )
    );

    setSnackbar({
      open: true,
      message: `Lance de ${formatCurrency(valorLance)} registrado com sucesso!`,
      severity: 'success',
    });
    setBidValue('');
    setErrors({});
  };

  const handleSelectVehicle = (vehicle) => {
    setSelectedId(vehicle.id);
    setBidValue('');
    setBidderName('');
    setErrors({});
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Cabeçalho */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, flexWrap: 'wrap' }}>
        <GavelIcon color="secondary" sx={{ fontSize: 36 }} />
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          Leilão de Veículos
        </Typography>
        <Chip
          label="● AO VIVO"
          color="error"
          size="small"
          sx={{ animation: 'pulse 1.5s infinite', fontWeight: 700 }}
        />
      </Box>

      <Grid container spacing={3}>
        {/* ── Lista de veículos ── */}
        <Grid item xs={12} md={7}>
          <Typography variant="subtitle1" color="text.secondary" fontWeight={600} sx={{ mb: 2 }}>
            Lotes em disputa
          </Typography>

          <Grid container spacing={2}>
            {vehicles.map((vehicle) => {
              const isSelected = selectedId === vehicle.id;
              const isUrgent = vehicle.tempoRestante < 600 && vehicle.status === 'ativo';

              return (
                <Grid item xs={12} sm={6} key={vehicle.id}>
                  <Card
                    elevation={isSelected ? 6 : 2}
                    onClick={() => handleSelectVehicle(vehicle)}
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      border: isSelected ? '2px solid #1565C0' : '2px solid transparent',
                      opacity: vehicle.status === 'encerrado' ? 0.65 : 1,
                      '&:hover': { boxShadow: 6 },
                    }}
                  >
                    <CardContent>
                      {/* Nome + status */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <DirectionsCarIcon color="primary" fontSize="small" />
                          <Typography variant="subtitle1" fontWeight={700}>
                            {vehicle.marca} {vehicle.modelo}
                          </Typography>
                        </Box>
                        <Chip
                          label={vehicle.status === 'encerrado' ? 'Encerrado' : 'Ativo'}
                          color={vehicle.status === 'encerrado' ? 'error' : 'success'}
                          size="small"
                        />
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                        {vehicle.ano} • {vehicle.cor} • {vehicle.placa}
                      </Typography>

                      <Divider sx={{ mb: 1.5 }} />

                      {/* Lance atual + cronômetro */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            Lance atual
                          </Typography>
                          <Typography variant="h6" fontWeight={700} color="success.dark">
                            {formatCurrency(vehicle.lanceAtual)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {vehicle.totalLances} lance(s)
                          </Typography>
                        </Box>

                        <Box sx={{ textAlign: 'right' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <AccessTimeIcon
                              fontSize="small"
                              color={getTimerColor(vehicle.tempoRestante)}
                            />
                            <Typography
                              variant="body2"
                              fontWeight={700}
                              color={`${getTimerColor(vehicle.tempoRestante)}.main`}
                              sx={{ fontFamily: 'monospace' }}
                            >
                              {vehicle.status === 'encerrado'
                                ? 'Encerrado'
                                : formatTime(vehicle.tempoRestante)}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Barra de urgência */}
                      {isUrgent && (
                        <LinearProgress
                          color="warning"
                          variant="determinate"
                          value={(vehicle.tempoRestante / 600) * 100}
                          sx={{ mt: 1.5, borderRadius: 1 }}
                        />
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* ── Painel de Lance ── */}
        <Grid item xs={12} md={5}>
          {selectedVehicle ? (
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
              {/* Título do lote selecionado */}
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {selectedVehicle.marca} {selectedVehicle.modelo} {selectedVehicle.ano}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {selectedVehicle.descricao}
              </Typography>

              {/* Lance atual em destaque */}
              <Paper
                sx={{ p: 2, bgcolor: 'success.50', border: '1px solid', borderColor: 'success.200', borderRadius: 2, mb: 3 }}
                elevation={0}
              >
                <Typography variant="caption" color="text.secondary">
                  Lance atual
                </Typography>
                <Typography variant="h4" fontWeight={800} color="success.dark">
                  {formatCurrency(selectedVehicle.lanceAtual)}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {selectedVehicle.totalLances} lance(s) registrado(s)
                </Typography>
              </Paper>

              {/* Formulário de lance */}
              {selectedVehicle.status !== 'encerrado' ? (
                <>
                  <TextField
                    fullWidth
                    label="Seu Nome *"
                    value={bidderName}
                    onChange={(e) => setBidderName(e.target.value)}
                    error={!!errors.bidderName}
                    helperText={errors.bidderName}
                    size="small"
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    label={`Valor do Lance (mín: ${formatCurrency(selectedVehicle.lanceAtual + 500)})`}
                    type="number"
                    value={bidValue}
                    onChange={(e) => setBidValue(e.target.value)}
                    error={!!errors.bidValue}
                    helperText={errors.bidValue}
                    size="small"
                    inputProps={{ min: selectedVehicle.lanceAtual + 500, step: 500 }}
                    sx={{ mb: 2.5 }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    color="secondary"
                    startIcon={<GavelIcon />}
                    onClick={handleBid}
                    sx={{ mb: 3, fontWeight: 700 }}
                  >
                    Dar Lance
                  </Button>
                </>
              ) : (
                <Alert severity="error" icon={<EmojiEventsIcon />} sx={{ mb: 3 }}>
                  <strong>Leilão encerrado!</strong>
                  {selectedVehicle.bids.length > 0 && (
                    <> Arrematado por <strong>{selectedVehicle.bids[0].bidder}</strong> — {formatCurrency(selectedVehicle.lanceAtual)}</>
                  )}
                </Alert>
              )}

              {/* Histórico de lances */}
              {selectedVehicle.bids.length > 0 && (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <TrendingUpIcon fontSize="small" color="action" />
                    <Typography variant="subtitle2" fontWeight={700}>
                      Histórico de Lances
                    </Typography>
                  </Box>
                  <List dense sx={{ maxHeight: 220, overflowY: 'auto' }}>
                    {selectedVehicle.bids.map((bid, idx) => (
                      <ListItem
                        key={idx}
                        sx={{
                          borderRadius: 1,
                          mb: 0.5,
                          bgcolor: idx === 0 ? 'success.50' : 'transparent',
                          border: idx === 0 ? '1px solid' : 'none',
                          borderColor: idx === 0 ? 'success.200' : 'transparent',
                        }}
                      >
                        <ListItemAvatar sx={{ minWidth: 36 }}>
                          <Avatar
                            sx={{
                              width: 28,
                              height: 28,
                              fontSize: 12,
                              bgcolor: idx === 0 ? 'success.main' : 'grey.400',
                            }}
                          >
                            {idx === 0 ? <EmojiEventsIcon sx={{ fontSize: 14 }} /> : <PersonIcon sx={{ fontSize: 14 }} />}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="body2" fontWeight={600}>
                                {bid.bidder}
                              </Typography>
                              <Typography variant="body2" fontWeight={700} color="success.dark">
                                {formatCurrency(bid.valor)}
                              </Typography>
                            </Box>
                          }
                          secondary={bid.time}
                        />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Paper>
          ) : (
            /* Estado vazio — nenhum veículo selecionado */
            <Paper
              elevation={1}
              sx={{
                p: 6,
                borderRadius: 3,
                textAlign: 'center',
                bgcolor: 'grey.50',
                border: '2px dashed',
                borderColor: 'grey.300',
              }}
            >
              <GavelIcon sx={{ fontSize: 64, color: 'grey.300', mb: 1 }} />
              <Typography variant="body1" color="text.disabled">
                Selecione um veículo ao lado para dar um lance
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>

      {/* ── Snackbar de Feedback ── */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3500}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
