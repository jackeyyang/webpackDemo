'use strict';
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const yamlFrontMatter = require('yaml-front-matter');
const config = require('./webpack/config');

var entries = {}; // 储存entry的对象

const pageFiles = glob.sync('src/projects/**/v/**/*', {
	nodir: true
});

pageFiles.forEach(function (item) {
	var pageData = yamlFrontMatter.loadFront(item);
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
// console.log(entries);

module.exports = {
	entry: entries,
	output: {
		path: config.OUTPUTPATH_DEV,
		filename: 'scripts/[name].js'
		// publicPath: config.STATIC_URL.DEV + '/dev/'		
	},
	resolve: {
		alias: config.alias
	}
};