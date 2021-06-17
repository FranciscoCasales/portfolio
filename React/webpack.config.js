const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.svg', '.png', '.pdf'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@data': path.resolve(__dirname, 'src/assets/data'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@mocks': path.resolve(__dirname, 'src/__mocks__'),
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
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
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pdf$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/data/[name].[contenthash].pdf',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),
    new DotEnv(),
    new CleanWebpackPlugin(),
    new WebpackPwaManifestPlugin({
      name: 'CodeCasales | Portfolio',
      short_name: 'CodeCasales 👻',
      description: 'Portafolio personal, conoce a codecasales',
      background_color: '#215968',
      theme_color: '#215968',
      icons: [
        {
          src: path.resolve(
            __dirname,
            'src/assets/images/console-icon-pwa.svg'
          ),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable',
        },
        {
          src: path.resolve(__dirname, 'src/assets/images/console-white.png'),
          size: 512,
        },
      ],
      start_url: '/',
      publicPath: '/',
      ios: true,
    }),
    new GenerateSW({
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
          urlPattern: /index\.html$/,
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: /(main|manifest)\..*\.(js|json)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'core',
            expiration: {
              maxEntries: 6,
              maxAgeSeconds: 60 * 60 * 24 * 5,
            },
          },
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
