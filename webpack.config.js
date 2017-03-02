var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'pub/');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {
        main: APP_DIR + '/js/index.jsx'
    },
    cache: true,
    devtool: "cheap-eval-source-map",
    output: {
        path: BUILD_DIR + '/c/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [APP_DIR, "node_modules"],
        extensions: ['.js', '.scss', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jsx|es.js)?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                include: APP_DIR,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Art Of Engineering",
            hash: true,
            cache: true,
            showErrors: true
        })
        // ,
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false
        // })
    ]
};

module.exports = config;