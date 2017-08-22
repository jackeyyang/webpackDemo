'use strict';

var path = require('path');
var PORT = 9999;
var cwd = process.cwd(); // 进程的当前工作目录 如：/Users/jackey/html5/webpackDemo
var resolve = function(){
	var args = Array.prototype.slice.call(arguments);
	args.unshift(cwd);
	return path.resolve.apply(null,args);
}

// 设置访问路径别名
var alias = {
	libs: resolve('libs'),
	jquery: resolve('libs/jquery')
}

exports.HASH_LENGTH = (hash,env) => env=='pro' ? '?['+hash+':9]' : '';
exports.vendor = ['jquery']; // 设置所有公共页面用到的js
exports.alias = alias; // 短路径设置
exports.OUTPUTPATH_DEV = resolve('dev'); // 开发生成目录
exports.STATIC_URL = {
	DEV: 'http://d.sinotn.com:' + PORT,
	PRO: '/static'
};
exports.CWD = cwd;
exports.PORT = PORT;
