/**
 * Created by Nealyang on 17/3/24.
 * 独立的开发服务器
 * 用于在开发环境中实现热更新，生产环境中不需要
 */
const Express = require('express');

const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./dev.config');

const config = require('../src/config');

const app = new Express();
const port = config.port+1;

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler,{
    noInfo:true,
    publicPath:webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port,function (err) {
    if(err){
        console.error(err);
    }else{
        console.info(`=====>>>>> Webpack development server is listening on port ${port}`)
    }
});



