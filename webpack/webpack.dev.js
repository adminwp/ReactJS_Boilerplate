const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');

const PORT = process.env.PORT | 3000;

module.exports = merge(common, {
	mode: process.env.NODE_ENV,

	performance: {
		hints: false,
	},

	devServer: {
		contentBase: path.resolve(__dirname, '../', 'build'),
		compress: true,
		port: PORT,
		open: true,
		clientLogLevel: 'silent',
		historyApiFallback: true,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin(),
	],
});
