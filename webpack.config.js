var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var glob = require('glob');
module.exports = {
  entry: glob.sync("./src/*.js"),
  // entry: {
  //   One: './src/flowz-builder-engine.js',
  //   Two: './src/global-variables-plugin.js'
  // },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
   plugins: [new HtmlWebpackPlugin({
   	  filename: 'index.html',
      template: 'index.html'})]
};
