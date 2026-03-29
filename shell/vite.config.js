import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [
      react(),
      federation({
        name: 'shell',
        remotes: {
          // Em produção os MFEs são copiados para shell/public e servidos junto
          // Em desenvolvimento apontam para os servidores locais
          mfeCadastro: isProd
            ? '/mfe-cadastro/assets/remoteEntry.js'
            : 'http://localhost:3001/assets/remoteEntry.js',
          mfeLeilao: isProd
            ? '/mfe-leilao/assets/remoteEntry.js'
            : 'http://localhost:3002/assets/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: '^18.0.0' },
          'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
          '@mui/material': { singleton: true },
          '@emotion/react': { singleton: true },
          '@emotion/styled': { singleton: true },
        },
      }),
    ],
    build: {
      target: 'esnext',
    },
    server: {
      port: 4000,
    },
  };
});
