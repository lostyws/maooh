'use strict';
/**
 * webpack.config.dll.js
 * @author zhanghaiyang<403724532@qq.com>
 * joyowo web
 * @version 1.0.0
 */

/**
 * Module dependencies
 * dll模块 DLL & DllReference, 用于打包独立基本不变的模块
 * https://github.com/webpack/docs/wiki/list-of-plugins#dllplugin
 */



let path = require('path');


/* config 基础参数配置文件 */
let config = require('./config');

/* webpack系列 */
let webpack = require('webpack');

/* 分离独立依赖的css文件 */
let ExtractTextPlugin = require('extract-text-webpack-plugin');


var HappyPack = require('happypack');


let DEST = config.dest;

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, './');

const BUILD_PATH = path.resolve(ROOT_PATH, DEST);

/*处理命令行参数*/
let minimist = require('minimist');
let knownOptions = {
    string: 'src',
    default: { src: process.env.NODE_ENV || 'website' }
};
let options = minimist(process.argv.slice(2), knownOptions);
const BUILD_MODULES_PATH = path.resolve(BUILD_PATH, './modules');
const BUILD_SRC_PATH = path.resolve(BUILD_MODULES_PATH, './'+options.src);

const ROOT_MODULES_PATH = path.resolve(ROOT_PATH, './modules');

const ROOT_SRC_PATH = path.resolve(ROOT_MODULES_PATH, './'+options.src);

function webpackConfig(args) {
    let entry = {
        vendor: config[options.src].vendor
    }

    /* 创建配置文件 */
    let wConfig = {
        entry: entry,
        output: {
            // path: BUILD_PATH,
            // publicPath: "./",
            path:BUILD_SRC_PATH,
            publicPath: `./${options.src}/`,
            filename: '[name].dll.js',
            library: '[name]_library',
        },
        module: {
            loaders: [{
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?-url"),
            },
            // {
            //     test: /\.jsx?$/,
            //     loaders: ['babel'],
            //     exclude: function(path) {
            //         // 路径中含有 plugins 的就不去解析。
            //         var isNpmModule = !!path.match(/\\plugins\\/);
            //         return isNpmModule;
            //     },
            //     happy: {
            //         id: 'jsx'
            //     }
            // },
            {
                test: /\.json$/,
                loader: 'json'
            }],
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
            extensions: ['', '.js', '.less', '.gif', '.html', '.png', '.webp', '.jpg','.css','.hbs']
        },
        externals: {
            // require("jquery") 是引用自外部模块的
            // 对应全局变量 jQuery
            "jquery": "jQuery",
            "$": "jQuery"
        },
        plugins: [
            new ExtractTextPlugin('[name].dll.css'),



            /* Dll */
            new webpack.DllPlugin({
                /**
                 * path
                 * 定义 manifest 文件生成的位置
                 * [name]的部分由entry的名字替换
                 */
                path: BUILD_SRC_PATH + '/[name]-manifest.json',
                /**
                 * name
                 * dll bundle 输出到那个全局变量上
                 * 和 output.library 一样即可。
                 */
                name: '[name]_library'
            }),

            /* 压缩js插件 */
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    screw_ie8: false,
                    warnings: false /* 不显示js规范的警告、提示 */
                },
                mangle: { screw_ie8: false },
                output: { screw_ie8: false },
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

        ],
    };

    return wConfig;
}




module.exports = webpackConfig;
