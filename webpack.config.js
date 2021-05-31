const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const myConfig = {
	devtool: 'inline-source-map',
	target: 'web',
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},

	resolve: {
		extensions: ['.js', '.html', '.jsx'],
	},

	performance: {
		hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						// presets: ['@babel/preset-react'],
						presets: [
							[
								'@babel/preset-env',
								{
									targets: 'defaults',
								},
							],
							'@babel/preset-react',
						],
					},
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
					filename: 'fonts/[hash][ext]',
				},
			},

			{
				test: /\.(png|jpg|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: './images/[hash][ext][query]',
				},
			},
		],
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		compress: true,
		port: 5000,
		open: true,
		clientLogLevel: 'silent',
		historyApiFallback: true,
		hot: true,
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		new CleanWebpackPlugin({
			dry: true,
			cleanOnceBeforeBuildPatterns: ['build'],
		}),

		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),

		new MiniCssExtractPlugin({
			filename: 'css/app.css',
			linkType: 'text/css',
		}),
	],
};

module.exports = myConfig;
