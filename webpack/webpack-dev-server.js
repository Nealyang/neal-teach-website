/**
 * Created by Nealyang on 17/3/24.
 * 独立的开发服务器
 * 用于在开发环境中实现热更新，生产环境中不需要
 */
var Express = require('express');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./dev.config');

var app = new Express();
var port = require('../src/config').port + 1;

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> 🚧  Webpack development server listening on port ${port}.`)
    }
});




