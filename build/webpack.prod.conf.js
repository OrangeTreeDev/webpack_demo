const baseWebpackConfig = require('./webpack.base.conf.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      allChunks: true
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    })
  ]
});