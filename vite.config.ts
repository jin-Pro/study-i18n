import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';
import svgr from 'vite-plugin-svgr';

const _path = (_: string) => path.resolve(__dirname, _);

export default defineConfig(({ mode }) => {
  const env: Record<string, string> = { ...loadEnv(mode, process.cwd(), '') };
  return {
    publicDir: 'public',
    resolve: {
      alias: {
        '@pages': _path('./src/pages'),
        '@components': _path('./src/components'),
        '@util': _path('./src/util'),
        '@msw': _path('./src/_msw'),
      },
    },
    server: {
      host: env.VITE_HOST.split('://')[1],
      port: 3000,
    },
    plugins: [
      react(),
      envCompatible({ prefix: 'REACT_APP' }),
      svgr({
        svgrOptions: {
          ref: true,
        },
      }),
    ],
  };
});
