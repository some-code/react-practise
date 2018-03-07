const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = __dirname;

module.exports = {
  // 打包模式
  mode: 'development',
  // 入口文件
  entry: path.resolve(root, '../src/main.js'),
  // 出口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, '../dist')
  },
  // loaders
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
      {test: /\.css?$/, use: ['style-loader','css-loader']},
      {test: /\.less?$/, use: ['style-loader','css-loader','less-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'react-practise',
      template: path.resolve(root, '../index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(root, '../dist'),
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    overlay: true,
  }
}