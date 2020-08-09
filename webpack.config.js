const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebPackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new WebPackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      shorthand: 'Petgram',
      description: 'Puedes encontrar fotos de animales domésticos',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          size: [96, 128, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|image.unsplash.com)',
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp(
            'https://petgram-server-elvis.elvisss.vercel.app',
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
