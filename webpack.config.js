var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'pub/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/js/index.jsx',
    cache: true,
    debug: true,
    output: {
        path: BUILD_DIR + '/c/js/',
        filename: 'bundle.js',
        publicPath: './pub/c/js/'
    },
    resolve: {
        root: APP_DIR,
        extensions: ['', '.js', '.scss']
    },
    module : {
        loaders : [
            {
                test : /\.(jsx|es.js)?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.scss$/,
                include : APP_DIR,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=/pub/fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader'
            }
        ]
    }
};

module.exports = config;