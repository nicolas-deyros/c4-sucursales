const commonPaths = require('./common-paths');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/index.js',
    hiperStores: './src/js/utils/hiperStores.js',
    marketStores: './src/js/utils/marketStores.js',
    expressStores: './src/js/utils/expressStores.js',
    maxiStores: './src/js/utils/maxiStores.js',
  },
  output: {
    filename: '[name]/js/[name].js',
    path: commonPaths.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          inlineRequires: '/img/',
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'Carrefour | Sucursales',
      logo: './img/logo_carrefour_hipermercado_horizontal.png',
      altText: 'Logo Carrefour Hipermercado Horizontal',
      inject: true,
      meta: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#faa61a',
        description: {
          name: 'description',
          content: 'Conoc\u00E9 el horario de los Hipermercados Carrefour',
        },
        robots: {
          name: 'robots',
          content: 'index,follow',
        },
      },
      template: './src/templates/index.hbs',
      filename: './index.html',
      chunks: ['app', 'hiperStores'],
    }),
    new HtmlWebPackPlugin({
      title: 'Carrefour Market | Sucursales',
      logo: './img/logo_carrefour_market_horizontal.png',
      altText: 'Logo Carrefour Market Horizontal',
      inject: true,
      meta: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#faa61a',
        description: {
          name: 'description',
          content: 'Conoc\u00E9 el horario de los Market Carrefour',
        },
        robots: {
          name: 'robots',
          content: 'index,follow',
        },
      },
      template: './src/templates/market.hbs',
      filename: './market.html',
      chunks: ['app', 'marketStores'],
    }),
    new HtmlWebPackPlugin({
      title: 'Carrefour Express | Sucursales',
      logo: './img/logo_carrefour_express_horizontal.png',
      altText: 'Logo Carrefour Express Horizontal',
      inject: true,
      meta: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#faa61a',
        description: {
          name: 'description',
          content: 'Conoc\u00E9 el horario de los Express Carrefour',
        },
        robots: {
          name: 'robots',
          content: 'index,follow',
        },
      },
      template: './src/templates/express.hbs',
      filename: './express.html',
      chunks: ['app', 'expressStores'],
    }),
    new HtmlWebPackPlugin({
      title: 'Carrefour Maxi | Sucursales',
      logo: './img/logo_carrefour_maxi_horizontal.png',
      altText: 'Logo Carrefour Maxi Horizontal',
      inject: true,
      meta: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#faa61a',
        description: {
          name: 'description',
          content: 'Conoc\u00E9 el horario de los Maxi Carrefour',
        },
        robots: {
          name: 'robots',
          content: 'index,follow',
        },
      },
      template: './src/templates/maxi.hbs',
      filename: './maxi.html',
      chunks: ['app', 'maxiStores'],
    }),
    new FaviconsWebpackPlugin({
      logo: './src/img/logo_carrefour_vertical.png',
      outputPath: './img/favicon/',
      inject: true,
      prefix: './sucursales/img/favicon/',
      favicons: {
        appName: 'Carrefour Sucursales',
      },
    }),
    new ManifestPlugin({
      'mods/alpha.js': 'mods/alpha.1234567890.js',
      'mods/omega.js': 'mods/omega.0987654321.js',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
  ],
};
