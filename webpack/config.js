'use strict';

var path = require('path');
var PORT = 9999;
var cwd = process.cwd(); // 进程的当前工作目录 如：/Users/jackey/html5/webpackDemo
var resolve = function(){
	var args = Array.prototype.slice.call(arguments);
	args.unshift(cwd);
	return path.resolve.apply(null,args);
}

var alias = {
	libs: resolve('libs'),
	jquery: resolve('libs/jquery')
}

console.log(alias);
exports.vendor = ['jquery']; // 设置所有公共页面用到的js
exports.alias = alias;
exports.OUTPUTPATH_DEV = '/dist';
exports.STATIC_URL = '';