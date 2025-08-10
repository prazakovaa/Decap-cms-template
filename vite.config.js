export default {
  build: {
    rollupOptions: {
      input: {
        admin: 'src/admin/admin.js'
      },
      output: {
        entryFileNames: 'static/js/[name].bundle.js'
      }
    },
    outDir: 'src',
    emptyOutDir: false
  }
};