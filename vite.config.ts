import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/ai-math-solver/', // IMPORTANT: Replace 'ai-math-solver' with your repository name.
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});
