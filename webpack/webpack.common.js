const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');

const myConfig = {
	target: 'web',
	entry: path.resolve(__dirname, '../', 'src', 'index.js'),
	output: {
		filename: 'js/app.[contenthash].js',
		path: path.resolve(__dirname, '../', 'build'),
		publicPath: '/',
	},

	resolve: {
		extensions: ['.js', '.html', '.json', '.jsx'],
	},

	optimization: {
		minimize: true,
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				},
			},

			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},

			{
				test: /\.(scss|sass)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: './fonts/[hash][ext]',
				},
			},

			{
				test: /\.(png|jpg|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: './images/[base]',
				},
			},
		],
	},

	plugins: [
		new ImageMinimizerWebpackPlugin({
			test: /\.(png|jpg|svg)$/i,
			maxConcurrency: 3,
			minimizerOptions: {
				plugins: [
					['mozjpeg', { quality: 50, progressive: true }],
					['pngquant', { quality: [0.5, 0.5] }],
					['gifsicle', { optimizationLevel: 2 }],
					['svgo', { multipass: true }],
				],
			},
		}),

		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../', 'src', 'index.html'),
			minify: true,
			inject: 'body',
		}),

		new MiniCssExtractPlugin({
			filename: 'css/app.css',
			linkType: 'text/css',
		}),
	],
};

module.exports = myConfig;
