'use strict';
/**
 * webpack.config.js
 * @author zhanghaiyang<403724532@qq.com>
 * joyowo web
 * @version 1.0.0
 */

/**
 * Module dependencies
 * 自动打包
 */



let path = require('path');
let glob = require('glob');
let fs = require("fs");

/* config 基础参数配置文件 */
let config = require('./config');

/* 端口号 */
let dllServerPort = config.dllServerPort;

/* webpack系列 */
let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');

/* 独立依赖的css文件 */
let ExtractTextPlugin = require('extract-text-webpack-plugin');

/* promise的httpGet请求 */
let promiseHttpGet = require('./tasks/util/promiseHttpGet');

let DEST = config.dest;

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, './');

let BUILD_PATH = path.resolve(ROOT_PATH, DEST);

/*处理命令行参数*/
let minimist = require('minimist');
let knownOptions = {
    string: 'src',
    default: { src: process.env.NODE_ENV || 'website' }
};
let options = minimist(process.argv.slice(2), knownOptions);
const ROOT_MODULES_PATH = path.resolve(ROOT_PATH, './modules');

const ROOT_SRC_PATH = path.resolve(ROOT_MODULES_PATH, './'+options.src);


var HappyPack = require('happypack');

/* 获取任务路径 */
let taskSrcF = require('./tasks/options/taskSrc');



/**
 * Function getEntry
 * 得到入口文件
 * @return {Object} filesObj 入口文件对象
 */
function getEntry(args) {

    let taskSrc = taskSrcF(args)

    let filesObj = {};

    let files = glob.sync(taskSrc.js.src, {
        ignore: taskSrc.js.ignore
    });


    //create fileObj
    files.forEach(function(item) {
        let index = item.lastIndexOf('/');
        if (index > -1) {
            let key = item.substring(0, item.length - 3),
                value = [path.resolve(ROOT_PATH, item)];
            filesObj[key] = value;
        }
    });

    return filesObj;
}




function webpackConfig(args) {
    var argv = process.argv.slice(2);
    /* 获取入口文件 */
    let entry = getEntry(args);

    /* 创建配置文件 */
    let wConfig = {
        entry: entry,
        output: {
            path: BUILD_PATH,
            publicPath: "./",
            filename: '[name].js'
        },
        // devtool: "#source-map",
        module: {
            loaders: [{
                        test: /\.css/,
                        loader: ExtractTextPlugin.extract("style-loader", "css-loader?-url"),
                    }, {
                        test: /\.hbs$/,
                        loader: "handlebars-loader"
                    }, {
                        test: /\.html$/,
                        loader: "html"
                    }
                // {
                //     test: /\.(png|jpg)$/,
                //     loader: 'url-loader?limit=1'
                // },
                // {
                //     test: /\.js$/,
                //     loader: 'babel',
                //     query: {
                //         presets: ['es2015']
                //     }
                // }
            ]
        },
        jshint: {
            // esnext: true
        },
        resolve: {
            alias: {
                '{plugins}': ROOT_PATH + '/plugins',
                '{public}': ROOT_SRC_PATH + '/public',
                '{js}': ROOT_SRC_PATH + '/js',
                '{css}': ROOT_SRC_PATH + '/css',
                '{tpl}': ROOT_SRC_PATH + '/tpl'
            },
            // modulesDirectories: [ 'lib', 'modules', 'node_modules'],
            extensions: ['', '.js', '.less', '.gif', '.html', '.png', '.webp', '.jpg']
        },
        externals: {
            // require("jquery") 是引用自外部模块的
            // 对应全局变量 jQuery
            "jquery": "jQuery",
            "$": "jQuery"
        },
        plugins: [
            new ExtractTextPlugin('[name].css'),
            /* 压缩js插件 */
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    /* 不显示js规范的警告、提示 */
                    warnings: false
                },
                //  Preserve copyright comments in the output. By
                // default this works like Google Closure, keeping
                // JSDoc-style comments that contain "@license" or
                // "@preserve". You can optionally pass one of the
                // following arguments to this flag:
                // - "all" to keep all comments
                // - a valid JS regexp (needs to start with a
                // slash) to keep only comments that match.
                // Note that currently not *all* comments can be
                // kept when compression is on, because of dead
                // code removal or cascading statements into
                // sequences.

                /**
                 * 上面的介绍是指，这个comments的选项是保留一些类似 "@license" or "@preserve" 这种版权的注释，
                 * 可选参数有2种， 一种是 字符串 'all'，保留所有注释。
                 * 另一种是 可以是正则表达式
                 * 这里我去掉了所有注释使用了 空字符串 '';
                 */
                comments: ''
            }),


            /**
             * webpack.ProvidePlugin
             * 作用是， 如果你的模块没有require一个模块，但是又使用这个模块的功能，就会预先插入以下你配置的对应模块。
             * 例如：
             *    Datatables 基于 jquery
             *    但是你在 Datatables 没有require('jquery'),
             *    不用担心，如果你下面 配置了jquery， 就会在打包的时候自动插入
             */
            // new webpack.ProvidePlugin({
            //     $: "jquery",
            //     jQuery: "jquery",
            //     jquery: "jquery",
            //     "window.jQuery": "jquery"
            // }),


            /* 提取公共模块 */
            //new webpack.optimize.CommonsChunkPlugin('common.js', commom, 2),
        ],
    };


    /**
     * [这里判断下是否是正式环境  argv[0] === 'build']
     * 正式环境开启// devtool: "#source-map",
     */
    if (argv[0] === 'dev') {
        wConfig.devtool = "#cheap-source-map";
    }


    return wConfig;

}




module.exports = webpackConfig;
