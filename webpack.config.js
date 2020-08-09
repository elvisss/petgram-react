const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebPackPwaManifestPlugin = require('webpack-pwa-manifest');

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
