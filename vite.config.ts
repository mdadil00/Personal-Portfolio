// filepath: c:\Users\adil\Documents\cohort2024\Intern_task\frontend\vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Personal-Portfolio/', // Add your repository name here
  plugins: [react()],
});
