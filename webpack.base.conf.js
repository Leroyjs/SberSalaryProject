/* Base config:
  ========================================================================== */

const path = require('path'),
  fs = require('fs'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  srcPath = path.join(__dirname, '/src'),
  wwwPath = path.join(__dirname, '/www'),
  publicPath = '/assets/',
  assetsPath = path.resolve(__dirname, `./www${publicPath}`),
  PATHS = {
    src: srcPath,
    www: wwwPath,
    public: publicPath,
    assets: assetsPath
  };

function getEntries(dir, pattern) {
  const filePattern = new RegExp(pattern, 'g');
  return fs
    .readdirSync(dir)
    .filter(file => file.match(filePattern))
    .map(file => {
      const fileName = file
        .split('.')
        .filter(el => el)
        .slice(0, -1)
        .join('.');
      return {
        name: fileName,
        path: `${dir}/${file}`
      };
    })
    .reduce((memo, file) => {
      memo[file.name] = file.path;
      return memo;
    }, {});
}

const jsEntries = getEntries(PATHS.src + '/js/entry', '.js$');

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: jsEntries,
  output: {
    filename: '[name].js',
    path: PATHS.assets,
    publicPath: PATHS.public
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-json-strings'
            ]
          }
        }
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: PATHS.src,
          publicPath: PATHS.public
        }
      },
      {
        // images / icons
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: PATHS.src,
              publicPath: PATHS.public
            }
          }
        ]
      },
      {
        // sass
        test: /\.(scss|sass)$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        // css
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.sass', '.scss', '.css'],
    alias: {
      '~': PATHS.src,
      '@': `${PATHS.src}/js`,
      app: `${PATHS.src}/js/app`
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
