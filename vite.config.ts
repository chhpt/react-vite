import path from 'path'
import react from '@vitejs/plugin-react'
import { ConfigEnv, UserConfigExport } from 'vite'
import visualizer from 'rollup-plugin-visualizer'
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
  define: {
    // fix process undefined error
    'process.env': {}
  },
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
    minify: 'terser',
    // cssCodeSplit: true,
    rollupOptions: {
      plugins: []
    }
  }
}

export default ({ command }: ConfigEnv) => {
  const { build = {} } = config
  const { rollupOptions = {} } = build

  // bundle analyze
  if (process.env.ANALYZE) {
    const { plugins = [] } = rollupOptions
    rollupOptions.plugins = [
      ...plugins,
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        template: 'sunburst'
      })
    ]
  }

  return config
}
