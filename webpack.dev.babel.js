'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const glob = require('glob');
const yamlFrontMatter = require('yaml-front-matter');
const config = require('./webpack/config');

var entries = {}; // 储存entry的对象

// v 目录下所有的页面路径
const pageFiles = glob.sync('src/projects/**/v/**/*', {
	nodir: true
});

var plugins = [
	new webpack.optimize.CommonsChunkPlugin({
		names: ['vendor', 'manifest'],
		minChunks: Infinity
	}),
	new ExtractTextPlugin('styles/[name].css' + config.HASH_LENGTH('contenthash')),
	//  去重
	// new webpack.HashedModuleIdsPlugin(),
	//把一个全局变量插入到所有的代码中,支持jQuery plugin的使用;使用ProvidePlugin加载使用频率高的模块
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		'window.$': 'jquery'
	})
];

// 从页面路径找到对应的文件，然后组成entries对象
pageFiles.forEach(function (item) {
	var pageData = yamlFrontMatter.loadFront(item); // 读取对应路径的文件内容
	var entry = pageData.entry && pageData.entry.replace(/\.js/,'');
	var chunks = []; 
	if(entry){
		chunks = ['manifest','vendor'];
		if(entry !== 'common'){
			chunks.push(entry);
			entries[entry.replace('/scripts/','/')] = [path.join(__dirname,'src/projects',entry)];
		}
	}
});
entries['vendor'] = config.vendor;

module.exports = {
	entry: entries,
	output: {
		path: config.OUTPUTPATH_DEV,
		filename: 'scripts/[name].js'+config.HASH_LENGTH('chunkhash'), // + 后面的是版本号
		publicPath: config.STATIC_URL.DEV + '/dev/'		
	},
	resolve: {
		alias: config.alias
	},
	devServer: {
		stats: 'minimal',
		port: config.PORT,
		host: '127.0.0.1',
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
};