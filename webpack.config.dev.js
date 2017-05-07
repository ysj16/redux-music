var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
module.exports = {
	devtool:'cheap-module-eval-source-map',
	entry:{
		app:[
			'webpack-hot-middleware/client',
			'./src/app'
		],
		vendors:['react','react-dom','react-router']

	},
	output:{
		filename:'[name].js',//[name]与入库文件文件名对应
		path: path.resolve(__dirname, './build'),
		publicPath:'/build/'
	},
	module:{
		loaders:[{
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
		},{
			test:/\.jsx?$/,
			include:[
				path.resolve(__dirname,'src')
			],
			loader:'babel-loader'
		},{
			test:/\.s?css$/,
			include:[
				path.resolve(__dirname,'src')
			],

		    loaders: [
		        'style-loader',
		        'css-loader?modules&localIdentName=[name]__[local][hash:base64:5]',
		        'sass-loader'
		    ]
		},{
			test:/\.css$/,
			include:[
				path.resolve(__dirname,'node_modules')
			],

		    loaders: [
		        'style-loader',
		        'css-loader'
		    ]
		}]
	},
	resolve:{
		modules: ['node_modules', path.join(__dirname, '../node_modules')],
		extensions:['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx','.json','.js','.jsx','.scss','.css']
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
			__DEV__:true
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}