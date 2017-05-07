var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var app = express();
var compiler = webpack(config);

var webpackDevOptions = {
	noInfo:true,
	historyApiFallback:true,
	publicPath:config.output.publicPath,
	header:{
		'Access-Control-Allow-Origin':'*'
	}
};
app.use(require('webpack-dev-middleware')(compiler,webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static(__dirname));
app.get('*',function(req,res){
	// res.sendFile(path.join(__dirname,'index-dev.html'));
})
app.listen(8787,function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log('Listening at http://localhost:8787');

})