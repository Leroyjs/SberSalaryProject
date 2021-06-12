const path = require('path'),
  webpack = require('webpack'),
  { merge } = require('webpack-merge'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.www,
    publicPath: `http://localhost:5000${baseWebpackConfig.externals.paths.public}`,
    port: 5000,
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   '**': {
    //     target: 'http://site.loc',
    //     secure: false,
    //     changeOrigin: true
    //   }
    // }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
