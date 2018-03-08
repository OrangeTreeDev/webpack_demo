const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');

module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
    ]
  }
});