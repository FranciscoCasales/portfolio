const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DotEnvWebpack = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: ['./src/frontend/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: 'app-[contenthash].js',
    hashFunction: 'md5',
    assetModuleFilename: 'assets/images/[contenthash][ext]',
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg', '.png', '.pdf'],
    modules: [path.resolve(__dirname, 'src'), './src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pdf$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/data/[name].[contenthash][ext]',
        },
      },
    ],
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: /\.(js|css|svg|png)/,
      filename: '[path][base].gz',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/server/initialState.script.js'),
          to: path.resolve(__dirname, './src/server/public'),
        },
        {
          from: path.resolve(__dirname, './robots.txt'),
          to: path.resolve(__dirname, './src/server/public'),
        },
        {
          from: path.resolve(__dirname, './sitemap.xml'),
          to: path.resolve(__dirname, './src/server/public'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'app-[contenthash].css',
    }),
    new DotEnvWebpack(),
    new CleanWebpackPlugin(),
    new WebpackPwaManifestPlugin({
      name: 'CodeCasales | Portfolio 👨🏽‍💻',
      short_name: 'Code Casales 👨🏽‍💻',
      description: 'Portafolio personal, conoce a jcasales',
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
          urlPattern: /^https:\/\/jcasales.xyz\/?(index\.html)?$/,
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
    new WebpackManifestPlugin.WebpackManifestPlugin({
      fileName: 'file-names.json',
      basePath: '',
      publicPath: '',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'vendor-[contenthash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return (chunk) =>
              chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name);
          },
        },
      },
    },
  },
};
