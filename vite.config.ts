import path from 'path'
import react from '@vitejs/plugin-react'
import { ConfigEnv, UserConfigExport } from 'vite'
import visualizer from 'rollup-plugin-visualizer'

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
  plugins: [react()],
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
      ...(Array.isArray(plugins) ? plugins : []),
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
