import { importShared } from './__federation_fn_import-BEuXGGPm.js';
import { u as utils, r as requireJsxRuntime, i as interopRequireDefaultExports, j as jsxRuntimeExports } from './index-C2yilidl.js';
import { g as getAugmentedNamespace } from './_commonjsHelpers-BPPvcXt-.js';

var Add = {};

var createSvgIcon = {};

const require$$0 = /*@__PURE__*/getAugmentedNamespace(utils);

var hasRequiredCreateSvgIcon;

function requireCreateSvgIcon () {
	if (hasRequiredCreateSvgIcon) return createSvgIcon;
	hasRequiredCreateSvgIcon = 1;
	(function (exports$1) {
		'use client';

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});
		Object.defineProperty(exports$1, "default", {
		  enumerable: true,
		  get: function () {
		    return _utils.createSvgIcon;
		  }
		});
		var _utils = require$$0; 
	} (createSvgIcon));
	return createSvgIcon;
}

var _interopRequireDefault$4 = interopRequireDefaultExports;
Object.defineProperty(Add, "__esModule", {
  value: true
});
var default_1$4 = Add.default = void 0;
var _createSvgIcon$4 = _interopRequireDefault$4(requireCreateSvgIcon());
var _jsxRuntime$4 = requireJsxRuntime();
default_1$4 = Add.default = (0, _createSvgIcon$4.default)( /*#__PURE__*/(0, _jsxRuntime$4.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add');

var Delete = {};

var _interopRequireDefault$3 = interopRequireDefaultExports;
Object.defineProperty(Delete, "__esModule", {
  value: true
});
var default_1$3 = Delete.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = requireJsxRuntime();
default_1$3 = Delete.default = (0, _createSvgIcon$3.default)( /*#__PURE__*/(0, _jsxRuntime$3.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete');

var DirectionsCar = {};

var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(DirectionsCar, "__esModule", {
  value: true
});
var default_1$2 = DirectionsCar.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = requireJsxRuntime();
default_1$2 = DirectionsCar.default = (0, _createSvgIcon$2.default)( /*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
  d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M5 11l1.5-4.5h11L19 11z"
}), 'DirectionsCar');

var Gavel = {};

var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(Gavel, "__esModule", {
  value: true
});
var default_1$1 = Gavel.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = requireJsxRuntime();
default_1$1 = Gavel.default = (0, _createSvgIcon$1.default)( /*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
  d: "m5.2494 8.0688 2.83-2.8269 14.1343 14.15-2.83 2.8269zm4.2363-4.2415 2.828-2.8289 5.6577 5.656-2.828 2.8289zM.9989 12.3147l2.8284-2.8285 5.6569 5.6569-2.8285 2.8284zM1 21h12v2H1z"
}), 'Gavel');

var Clear = {};

var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Clear, "__esModule", {
  value: true
});
var default_1 = Clear.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = requireJsxRuntime();
default_1 = Clear.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

const React = await importShared('react');
const {useState} = React;

const {Alert,Box,Button,Chip,Dialog,DialogActions,DialogContent,DialogTitle,FormControl,Grid,IconButton,InputLabel,MenuItem,Paper,Select,Snackbar,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,Typography} = await importShared('@mui/material');
const TIPOS = ["Carro", "SUV", "Moto", "Caminhão", "Van", "Pickup"];
const CORES = [
  "Branco",
  "Preto",
  "Prata",
  "Cinza",
  "Vermelho",
  "Azul",
  "Verde",
  "Amarelo",
  "Marrom",
  "Outra"
];
const MARCAS = [
  "Chevrolet",
  "Fiat",
  "Volkswagen",
  "Ford",
  "Toyota",
  "Honda",
  "Hyundai",
  "Renault",
  "Jeep",
  "BMW",
  "Mercedes-Benz",
  "Outra"
];
const INITIAL_VEHICLES = [
  {
    id: 1,
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2021,
    placa: "ABC-1234",
    cor: "Branco",
    tipo: "Carro",
    valorMinimo: 45e3,
    descricao: "Veículo em ótimo estado, apenas um dono."
  },
  {
    id: 2,
    marca: "Toyota",
    modelo: "Hilux",
    ano: 2020,
    placa: "DEF-5678",
    cor: "Prata",
    tipo: "Pickup",
    valorMinimo: 18e4,
    descricao: "Caminhonete 4x4 com pouco uso."
  },
  {
    id: 3,
    marca: "Honda",
    modelo: "CB 500",
    ano: 2022,
    placa: "GHI-9012",
    cor: "Preto",
    tipo: "Moto",
    valorMinimo: 28e3,
    descricao: "Moto em excelente estado, sem sinistro."
  }
];
const EMPTY_FORM = {
  marca: "",
  modelo: "",
  ano: "",
  placa: "",
  cor: "",
  tipo: "",
  valorMinimo: "",
  descricao: ""
};
const formatCurrency = (value) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
function CadastroVeiculo({ onAddVehicle }) {
  const [vehicles, setVehicles] = useState(INITIAL_VEHICLES);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [deleteId, setDeleteId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const validate = () => {
    const newErrors = {};
    if (!form.marca) newErrors.marca = "Campo obrigatório";
    if (!form.modelo.trim()) newErrors.modelo = "Campo obrigatório";
    if (!form.ano || Number(form.ano) < 1900 || Number(form.ano) > (/* @__PURE__ */ new Date()).getFullYear() + 1)
      newErrors.ano = "Ano inválido";
    if (!form.placa.trim()) newErrors.placa = "Campo obrigatório";
    if (!form.cor) newErrors.cor = "Campo obrigatório";
    if (!form.tipo) newErrors.tipo = "Campo obrigatório";
    if (!form.valorMinimo || Number(form.valorMinimo) <= 0)
      newErrors.valorMinimo = "Informe um valor positivo";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const newVehicle = {
      ...form,
      id: Date.now(),
      ano: Number(form.ano),
      valorMinimo: Number(form.valorMinimo)
    };
    setVehicles((prev) => [...prev, newVehicle]);
    if (onAddVehicle) onAddVehicle(newVehicle);
    handleClear();
    setSnackbar({ open: true, message: "Veículo cadastrado com sucesso!", severity: "success" });
  };
  const handleClear = () => {
    setForm(EMPTY_FORM);
    setErrors({});
  };
  const handleDeleteRequest = (id) => {
    setDeleteId(id);
    setDialogOpen(true);
  };
  const handleDeleteConfirm = () => {
    setVehicles((prev) => prev.filter((v) => v.id !== deleteId));
    setDialogOpen(false);
    setSnackbar({ open: true, message: "Veículo removido do cadastro.", severity: "info" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: { xs: 2, md: 4 } }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, mb: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, { color: "primary", sx: { fontSize: 36 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", fontWeight: "bold", color: "text.primary", children: "Cadastro de Veículos" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { p: 3, mb: 4, borderRadius: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", fontWeight: 600, color: "text.secondary", sx: { mb: 3 }, children: "Novo Veículo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "form", onSubmit: handleSubmit, noValidate: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 2.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, error: !!errors.marca, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Marca *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              value: form.marca,
              label: "Marca *",
              onChange: (e) => setForm({ ...form, marca: e.target.value }),
              children: MARCAS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: m, children: m }, m))
            }
          ),
          errors.marca && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error", sx: { mt: 0.5, ml: 1.75 }, children: errors.marca })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            label: "Modelo *",
            value: form.modelo,
            onChange: (e) => setForm({ ...form, modelo: e.target.value }),
            error: !!errors.modelo,
            helperText: errors.modelo
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            label: "Ano *",
            type: "number",
            value: form.ano,
            onChange: (e) => setForm({ ...form, ano: e.target.value }),
            error: !!errors.ano,
            helperText: errors.ano,
            inputProps: { min: 1900, max: (/* @__PURE__ */ new Date()).getFullYear() + 1 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            label: "Placa *",
            value: form.placa,
            onChange: (e) => setForm({ ...form, placa: e.target.value.toUpperCase() }),
            error: !!errors.placa,
            helperText: errors.placa,
            placeholder: "ABC-1234"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, error: !!errors.cor, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Cor *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              value: form.cor,
              label: "Cor *",
              onChange: (e) => setForm({ ...form, cor: e.target.value }),
              children: CORES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: c, children: c }, c))
            }
          ),
          errors.cor && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error", sx: { mt: 0.5, ml: 1.75 }, children: errors.cor })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, error: !!errors.tipo, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "Tipo *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              value: form.tipo,
              label: "Tipo *",
              onChange: (e) => setForm({ ...form, tipo: e.target.value }),
              children: TIPOS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: t, children: t }, t))
            }
          ),
          errors.tipo && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "error", sx: { mt: 0.5, ml: 1.75 }, children: errors.tipo })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            label: "Valor Mínimo (R$) *",
            type: "number",
            value: form.valorMinimo,
            onChange: (e) => setForm({ ...form, valorMinimo: e.target.value }),
            error: !!errors.valorMinimo,
            helperText: errors.valorMinimo,
            inputProps: { min: 0, step: 1e3 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 12, md: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            fullWidth: true,
            label: "Descrição",
            multiline: true,
            rows: 2,
            value: form.descricao,
            onChange: (e) => setForm({ ...form, descricao: e.target.value })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "flex-end", gap: 1.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}),
              onClick: handleClear,
              children: "Limpar"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$4, {}),
              color: "primary",
              children: "Cadastrar Veículo"
            }
          )
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { borderRadius: 3, overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            p: 2,
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, { sx: { color: "white" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", color: "white", fontWeight: 600, children: [
              "Veículos Cadastrados (",
              vehicles.length,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { bgcolor: "grey.50" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Veículo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Ano" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Placa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Tipo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Cor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Valor Mínimo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold" }, align: "center", children: "Ações" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: vehicles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, align: "center", sx: { py: 6, color: "text.disabled" }, children: "Nenhum veículo cadastrado ainda." }) }) : vehicles.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: 600, children: [
              v.marca,
              " ",
              v.modelo
            ] }),
            v.descricao && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: v.descricao.length > 55 ? `${v.descricao.substring(0, 55)}…` : v.descricao })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.ano }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: v.placa, size: "small", variant: "outlined" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.tipo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: v.cor }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "body2",
              fontWeight: 700,
              color: "success.dark",
              children: formatCurrency(v.valorMinimo)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              onClick: () => handleDeleteRequest(v.id),
              color: "error",
              size: "small",
              title: "Remover veículo",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, {})
            }
          ) })
        ] }, v.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: dialogOpen, onClose: () => setDialogOpen(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Confirmar Exclusão" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: "Deseja realmente remover este veículo do cadastro?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setDialogOpen(false), children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleDeleteConfirm, color: "error", variant: "contained", children: "Remover" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Snackbar,
      {
        open: snackbar.open,
        autoHideDuration: 3500,
        onClose: () => setSnackbar((s) => ({ ...s, open: false })),
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Alert,
          {
            severity: snackbar.severity,
            onClose: () => setSnackbar((s) => ({ ...s, open: false })),
            variant: "filled",
            children: snackbar.message
          }
        )
      }
    )
  ] });
}

export { CadastroVeiculo as default };
