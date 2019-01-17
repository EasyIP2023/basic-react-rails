// Common client-side webpack configuration used by
// webpack.client.rails.hot.config and webpack.client.rails.build.config.

const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const { resolve, join } = require('path');

const { assetLoaderRules } = require('./webpack.common.config');

const webpackConfigLoader = require('react-on-rails/webpackConfigLoader');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const configPath = resolve('..', 'config');
const { output, settings } = webpackConfigLoader(configPath);
const isHMR = settings.dev_server && settings.dev_server.hmr;

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {
  mode: nodeEnv,
  // the project dir
  context: resolve(__dirname),
  entry: {
    // This will contain the app entry points defined by

    // See use of 'vendor' in the CommonsChunkPlugin inclusion below.
    'vendor-bundle': [
      '@babel/polyfill',
      'es5-shim/es5-shim',
      'es5-shim/es5-sham',
      'jquery',
      'turbolinks',
    ],
    // webpack.client.rails.hot.config and webpack.client.rails.build.config
    'app-bundle': [
      './app/startup/clientRegistration',
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      images: join(process.cwd(), 'app', 'assets', 'images'),
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new webpack.DefinePlugin({
      TRACE_TURBOLINKS: devBuild,
    }),
    new ManifestPlugin({
      publicPath: output.publicPath,
      writeToFileEmit: true,
    }),
    new MiniCssExtractPlugin({
      filename: devBuild ? '[name].css' : '[name]-[hash].css',
      chunkFilename: devBuild ? '[id].css' : '[id]-[hash].css',
    }),

    // For chunk Optimazation courtesy of this thread
    // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  ],

  module: {
    rules: [
      ...assetLoaderRules,

      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          },
        ],
      },
      {
        test: require.resolve('turbolinks'),
        use: {
          loader: 'imports-loader?this=>window'
        },
      },
      // Bootstrap 3
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        use: {
          loader: 'imports-loader',
          options: {
            jQuery: 'jquery',
          },
        },
      },
      // Bootstrap 4
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: {
          loader: 'imports-loader',
          options: {
            jQuery: 'jquery',
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
