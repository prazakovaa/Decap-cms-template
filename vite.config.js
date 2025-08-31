import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({
      filename: './dist/bundle-visualizer.html', // kam se uloží report
      open: false, // automaticky otevře po buildu
    }),
  ],
  build: {
    rollupOptions: { 
      input: { 
        admin: 'src/admin/admin.js',
      },
      output: {
        entryFileNames: 'js/[name].bundle.js',
      },
      external: ['react', 'react-dom', '@decap/cms']

    },
    outDir: 'src/static',
    emptyOutDir: false,
    minify: 'terser',
  },
});

