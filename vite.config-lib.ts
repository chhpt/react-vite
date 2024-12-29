import path from 'path'
import react from '@vitejs/plugin-react'
import { UserConfigExport } from 'vite'

// add @vitejs/plugin-legacy to support legacy browsers
// import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
const config: UserConfigExport = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {},
  plugins: [react()],
  build: {
    target: 'es2015',
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'recat',
      fileName: (format) => `rk.${format}.js`
    },
    rollupOptions: {
      plugins: []
    }
  }
}

export default () => {
  return config
}
