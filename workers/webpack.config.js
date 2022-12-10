module.exports = {
	target: 'webworker',
	context: __dirname,
	entry: './src/index.js',
	mode: 'development',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
}