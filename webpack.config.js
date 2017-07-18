'use strict';
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const pageFiles = glob.sync('src/projects/**/v/**/*', {
	nodir: true
});

console.log(pageFiles);

module.exports = {
	entry: './src/assets/scripts/common/common',
	output: {
		path: path.resolve(__dirname,'./dist'),
		publicPath: '/dist',
		filename: 'build.js'
	}
};