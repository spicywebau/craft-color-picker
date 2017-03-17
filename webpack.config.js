const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: {
		main: './src/main.js',
		polyfill: './src/polyfill.js',
	},
	output: {
		path: './colorpicker/resources/',
		filename: '[name].js',
	},
	externals: {
		jquery: 'jQuery',
		craft: 'Craft',
		garnish: 'Garnish',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
		}),
	],
	module: {
		loaders: [
			{
				loader: 'style-loader!css',
				test: /\.css$/,
			},
			{
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.scss$/,
			},
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				query: {
					presets: ['es2015'],
				},
			},
		],
	},
	node: {
		// @see https://github.com/webpack-contrib/css-loader/issues/454
		Buffer: false,
	},
}
