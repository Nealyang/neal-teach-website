/**
 * Created by Nealyang on 17/3/24.
 */
const path = require('path');
const webpack = require('webpack');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const projectRootPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(projectRootPath, './static/dist');

module.exports = {
    devtool: 'source-map',
    context:projectRootPath,
    entry:[
        './build/client'
    ],
    output:{
        path:assetsPath,
        filename:'[name]-[chunkhash].js',
        chunkFilename:'[name]-[chunkhash].js',
        publicPath:'/dist/'
    },
    progress:true,
    plugins:[
        new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
        new webpack.optimize.DedupePlugin(),//去重
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new WebpackIsomorphicTools(require('./webpack-isomorphic-tools')),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
            __SERVER__: false
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            "window.jQuery":"jquery"
        })
    ],
    module:{
        loaders:[
            { test: /\.(jpeg|jpg|png|gif)$/, loader: 'url-loader?limit=10240' },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]' +
                    '!postcss'
                )
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]' +
                    '!postcss' +
                    '!sass'
                )
            },
        ]
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
};