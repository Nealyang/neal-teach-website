var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dist');

var config = require('../src/config');

module.exports = {
    devtool: 'cheap-eval-source-map',
    context: projectRootPath,
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
        './src/client'
    ],
    output: {
        path: assetsPath,
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: 'http://' + config.host + ':' + (config.port + 1) + '/dist/'
    },
    progress: true,
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __SERVER__: false
        }),
        new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')).development(),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            "window.jQuery":"jquery"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react-hmre']
                }
            },
            { test: /\.(jpeg|jpg|png|gif)$/, loader: 'url-loader?limit=10240' },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
                    'postcss'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
                    'postcss',
                    'sass'
                ]
            }
        ]
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
};
