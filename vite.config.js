const { resolve } = require('path')
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [WindiCSS()],
  server: {
    open: '/index.html',
    // port: 3116
  },
  publicDir: 'media',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    outDir: 'public'
  }
}
