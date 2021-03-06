// Common webpack configuration for server bundle
const { resolve, join } = require('path');
const webpack = require('webpack');
const webpackCommon = require('./webpack.common.config');

const { assetLoaderRules } = webpackCommon;

const webpackConfigLoader = require('react-on-rails/webpackConfigLoader');

const configPath = resolve('..', 'config');
const { output } = webpackConfigLoader(configPath);

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {
  mode: nodeEnv,

  // the project dir
  context: __dirname,
  entry: [
    '@babel/polyfill',
    './app/startup/serverRegistration',
  ],
  output: {
    // Important to NOT use a hash if the server webpack config runs separately from the client one.
    // Otherwise, both would be writing to the same manifest.json file.
    // Additionally, there's no particular need to have a fingerprint (hash) on the server bundle,
    // since it's not cached by the browsers.
    filename: 'server-bundle.js',
    chunkFilename: '[name]-[chunkhash].js',

    // Leading and trailing slashes ARE necessary.
    publicPath: output.publicPath,
    path: output.path,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      images: join(process.cwd(), 'app', 'assets', 'images'),
    },
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       default: false,
  //       vendors: false,
  //       vendor: { /* Any import code from node_modules will be put here */
  //         name: 'server-bundle', // Name for chunks
  //         chunks: 'all', // sync + async chunks
  //         test: /node_modules/, // import file path containing node_modules
  //         priority: 20,
  //       },
  //     },
  //   },
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        TRACE_TURBOLINKS: devBuild,
      },
    }),
  ],
  module: {
    rules: [
      ...assetLoaderRules,
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader/locals',
          options: {
            modules: true,
            importLoaders: 0,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './app/assets/styles/app-variables.scss',
            },
          },
        ],
      },
    ],
  },
};
