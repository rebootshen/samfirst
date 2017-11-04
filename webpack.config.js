let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let APP_DIR = path.resolve(__dirname, 'src/client');
let BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    app: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  devtool: 'source-map',
  // Add minification
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        comments: false,
        minimize: false
      }

    }),
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.html'
    })
  ],
  module: {
    /*
     * Each loader needs an associated Regex test that goes through each
     * of the files you've included (or in this case, all files but the
     * ones in the excluded directories) and finds all files that pass
     * the test. Then it will apply the loader to that file.
     */
    loaders: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  //externals: {
  //  'react': 'React',
  //  'react-dom': 'ReactDOM'
  //},
};