const { merge } = require('webpack-merge'),
  baseWebpackConfig = require('./webpack.base.conf'),
  buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    watch: false
  });

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
