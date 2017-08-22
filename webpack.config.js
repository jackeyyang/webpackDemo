var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var htmlWebpackPlugin = require('html-webpack-plugin');

var assetsPath = {
	srcRootPath: './src/',
	common: 'assets/common',
	choiceBC: './scr/assets/choice-BC'
};

module.exports = {
  entry: {
  	app: assetsPath.srcRootPath + assetsPath.common +'/js/app.js'
  },
  output: {
    path: __dirname +'/dist',
    filename: assetsPath.common+'/js/[name].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, 
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
  	new uglifyJsPlugin(),
    new htmlWebpackPlugin({
      template: './src/html/choice-BC/index.html'
    })
  ]
}