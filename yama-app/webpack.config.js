const path = require('path')
const distDir = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')



module.exports = {
  entry: {
    index: './app/yama-app-entry.js'
  },
 /* output: {
    filename: 'bundle.js',
    path: distDir,
  },*/
  mode: 'development',
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['index'],
    }),
    new webpack.ProvidePlugin({ 
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ],

  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(hbs)$/,
      use: 'raw-loader'
    }, 
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000', }
    ]
  }
};