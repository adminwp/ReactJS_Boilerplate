const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
	mode: process.env.NODE_ENV,
	devtool: false,
	performance: {
		hints: 'warning',
		maxAssetSize: 100 * 1024, // 100 KiB
		maxEntrypointSize: 100 * 1024, // 100 KiB
	},

	plugins: [
		// new CleanWebpackPlugin({
		// 	dry: true,
		// 	cleanOnceBeforeBuildPatterns: ['build'],
		// }),

		new CleanWebpackPlugin(),
	],
});
