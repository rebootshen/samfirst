let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: path.resolve(__dirname,'src','index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
  },
  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx']
  },
    // Add minification
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        { test: /\.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src', 'index.html')
    })
  ]
};