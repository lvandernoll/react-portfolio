require('webpack');
const path = require('path');
const parentDir = path.join(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CSSLOADER = {
	loader: 'css-loader',
	options: {
		sourceMap: true,
		modules: true,
		localIdentName: '[local]___[hash:base64:5]'
	}
}

const CSSLOADER_NOHASH = {
	loader: 'css-loader',
	options: {
		sourceMap: true,
	}
}

const SASSRESOURCES = {
	loader: 'sass-resources-loader',
	options: {
		resources: require(path.join(process.cwd(), 'app/styles/utils.js')),
	}
}

module.exports = {
	watch: true,
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: './bundle.js'
	},
	module: {
		rules: [{
			test: /\.(scss)$/,
			use: [
			'style-loader',
			CSSLOADER,
			'sass-loader',
			SASSRESOURCES
		]}, {
			test: /\.(css)$/,
			use: [
			'style-loader',
			CSSLOADER_NOHASH,
		]}, {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.(png|jpg|gif|svg|ico)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'images/'
			}
		}
		]
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	devServer: {
		contentBase: parentDir + '/public',
		host: 'localhost',
		port: 8888,
	}
}
