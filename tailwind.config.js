module.exports = {
  // mode: 'jit',
  purge: {
    safeList: [],
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{jsx,tsx}']
  },
  theme: {
    extend: {}
  },
  plugins: []
}
