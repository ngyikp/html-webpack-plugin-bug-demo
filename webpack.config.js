'use strict';

const Promise = require('bluebird'); // <-- removing this line to use native Promise will fix the issue
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Promise.resolve({
	entry: './app',
	output: {
		path: '/tmp/',
		filename: '[name]',
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
});
