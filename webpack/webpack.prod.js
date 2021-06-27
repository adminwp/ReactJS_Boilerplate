const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
	mode: process.env.NODE_ENV,
	devtool: false,
	performance: {
		hints: 'warning',
	},
	plugins: [
		// new CleanWebpackPlugin({
		// 	dry: true,
		// 	cleanOnceBeforeBuildPatterns: ['build'],
		// }),

		new CleanWebpackPlugin(),
	],
});
