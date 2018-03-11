const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');

module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    port: 3001,
  },
  devServer: {
    contentBase: '../dist' 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
});