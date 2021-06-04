import path from 'path'
import { ConfigEnv, UserConfigExport } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import visualizer from 'rollup-plugin-visualizer'
import vitePluginImp from 'vite-plugin-imp'

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
    reactRefresh(),
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
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`,
          libDirectory: 'lib'
        }
      ]
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
    polyfillDynamicImport: true,
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
