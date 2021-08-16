const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/frontend/index.jsx',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    hashFunction: 'md5',
    assetModuleFilename: 'assets/images/[contenthash][ext]',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg', '.png', '.pdf'],
    modules: [path.resolve(__dirname, 'src'), './src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg)/,
        type: 'asset/resource',
      },
      {
        test: /\.pdf$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/data/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.woff|woff2$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[contenthash].[ext]',
            outputPath: './assets/fonts/',
            publicPath: '../assets/fonts/',
            esModule: false,
          },
        },
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/server/initialState.script.js'),
          to: path.resolve(__dirname, './dist'),
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
    new DotEnv(),
    new CleanWebpackPlugin(),
    new WebpackPwaManifestPlugin({
      name: 'CodeCasales | Portfolio 👨🏽‍💻',
      short_name: 'Code Casales 👨🏽‍💻',
      description: 'Portafolio personal, conoce a codecasales',
      background_color: '#215968',
      theme_color: '#215968',
      icons: [
        {
          src: path.resolve(
            __dirname,
            'src/frontend/assets/images/console-icon-pwa.svg'
          ),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable',
        },
        {
          src: path.resolve(
            __dirname,
            'src/frontend/assets/images/console-white.png'
          ),
          size: 512,
        },
      ],
      start_url: '/',
      publicPath: '/',
      ios: true,
    }),
    new GenerateSW({
      exclude: [/index\.html$/],
      maximumFileSizeToCacheInBytes: 1000 * 1000 * 5,
      runtimeCaching: [
        {
          urlPattern: /\.(png|jpg|jpeg|svg|pdf)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'assets-static',
            expiration: {
              maxEntries: 70,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
        {
          urlPattern: /^http:\/\/localhost:3006\/?(index\.html)?$/i,
          handler: 'NetworkFirst',
        },
        {
          urlPattern: /(main|manifest)\..*\.(js|json|css)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'app-core',
            expiration: {
              maxEntries: 6,
              maxAgeSeconds: 60 * 60 * 24 * 5,
            },
          },
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3006,
  },
};
