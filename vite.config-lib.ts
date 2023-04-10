import path from 'path'
import react from '@vitejs/plugin-react'
import { UserConfigExport } from 'vite'
import usePluginImport from 'vite-plugin-importer'

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
  plugins: [
    react(),
    // legacy({
    //   targets: [
    //     'Android >= 39',
    //     'Chrome >= 50',
    //     'Safari >= 10.1',
    //     'iOS >= 10.3',
    //     '> 1%',
    //     'not IE 11'
    //   ]
    // }),
    // import antd on demand
    usePluginImport({
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // suport inline javascript
        javascriptEnabled: true
      }
    }
  },
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
