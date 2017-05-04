var path = require('path');
// var htmlWebpackPlugin = require('html-webpack-plugin');
var rootPath = path.resolve(__dirname);
var webpack = require('webpack');
var commPlugin = new webpack.optimize.CommonsChunkPlugin("comm"); //提取了webpack的公共处理部分webpackJsonp，如果指定生成，output内容依赖此文件
var extractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        index: './entry/js/enter.js'
    },
    output: {
        path: __dirname + '/public/', //输入默认主目录
        publicPath: '../public/', //表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换。
        filename: '[name].js'
    },
    plugins: [commPlugin, new extractTextPlugin('[name].css')],
    resolve: {
        //查找module的话从这里开始查找
        modules: ['E:\GitCode\Web\MyCode'], //绝对路径
        extensions: [' ', '.js', '.css'],
        alias: {
            moduleA: path.join(__dirname, 'entry/js/moduleA.js'),
            moduleB: path.join(__dirname, 'entry/js/moduleB.js')
        }
    },
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: extractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" }) },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=images/[hash:16].[name].[ext]' },
            { test: /\.html$/, loader: 'html-loader?limit=8192&name=images/[hash:16].[name].[ext]' },

        ]
    }
};