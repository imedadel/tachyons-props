module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'TachyonsProps',
      externals: {
        react: 'React'
      }
    }
  }
}
