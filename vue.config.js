const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  configureWebpack: { plugins: [
    new StyleLintPlugin({ files: [ 'src/**/*.{vue,scss}' ] }),
  ] },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '^/api': { target: 'http://localhost:3101' },
      '^/resources': { target: 'http://localhost:3101' },
      '^/rsp': { target: 'http://localhost:3101' },
    },
  },
  filenameHashing: process.env.NODE_ENV !== 'production',
  transpileDependencies: [
    'vuetify',
  ],
};
