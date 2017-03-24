/**
 * Created by Nealyang on 17/3/23.
 */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const WebpackIsomorphicTools = require('webpack-isomorphic-tools/plugin');

const projectRootPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(projectRootPath, './static/dist');

const config = require('../src/config');

module.exports = {
    devtool: 'cheap-eval-source-map',
    context:projectRootPath,//universal渲染同构工具必须
    entry:[
        'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
        './src/client'
    ],
    output:{
        path:assetsPath,
        filename:'[name]-[hash].js',
        chunkFilename:'[name]-[chunkhash].js',
        publicPath:`http://${config.host}:${config.port+1}/dist/`
    },
    progress:true,
    plugin:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __SERVER__:false
        }),
        new WebpackIsomorphicTools(require('./webpack-isomorphic-tools')).development()
    ],
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel',
                exclude:/node_modules/,
                query:{
                    presets:["react-hmre"]
                }
            },
            {
                test:/\.(jpeg|jpg|png|gif)$/,
                loader:'url-loader?limit=10240'
            },
            {
                test:/\.css$/,
                loaders:[
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test:/\.scss/,
                loaders:[
                    'style-loader',
                    'css-loader?modules&importLoaders=2&localIdentName=[name]_[local]_[hash:base64:5]',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    postcss:[autoprefixer({browsers:['last 2 versions']})]
};

