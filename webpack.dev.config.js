const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

dotenv.config();

const package = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf-8'));

const aliases = {
    utils: path.resolve(__dirname, 'src/utils'),
	config: path.resolve(__dirname, 'src/config'),
	styles: path.resolve(__dirname, 'src/styles'),
    actions: path.resolve(__dirname, 'src/actions'),
    icons: path.resolve(__dirname, 'src/assets/icons'),
    reducers:  path.resolve(__dirname, 'src/reducers'),
    constants:path.resolve(__dirname, 'src/constants'),
    images: path.resolve(__dirname, 'src/assets/images'),
    libraries:  path.resolve(__dirname, 'src/libraries'),
	components: path.resolve(__dirname, 'src/components'),
    common: path.resolve(__dirname, 'src/components/common')
}

module.exports = [{
	name: 'client',
	target: 'web',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, `./dist/${package.version}/client`),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			//run all javascript through babel loader
			{
				test: /\.jsx?$/,
				exclude: /(node_modules\/)/,
				loader: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: aliases
	},
	plugins: [
		new Dotenv(),
		new webpack.optimize.OccurrenceOrderPlugin()
	]
},
{
	name: 'server',
	target: 'node',
	entry: [
		'@babel/polyfill',
		'./src/server/server.js'
	],
	output: {
		path: path.join(__dirname, `./dist/${package.version}/server`),
		filename: 'server.bundle.js',
		publicPath: '/dist/'
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			//run all javascript through babel loader
			{
				test: /\.jsx?$/,
				exclude: /(node_modules\/)/,
				loader: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: aliases
	},
	plugins: [
		new Dotenv(),
		new webpack.optimize.OccurrenceOrderPlugin()
	]
}];