'use strict';

/**
 * md5.js
 * @author zhanghaiyang<403724532@qq.com>
 * @version 1.0.0
 */
/**
 * Module dependencies
 * gulp md5 task
 */
let path = require('path');
/* gulp系列 */
let gulp = require('gulp');
let rev = require('gulp-rev');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');


/**
 * [knownOptions 默认命令行参数]
 * @type {Object}
 */
let knownOptions = {
    string: 'src',
    default: { src: process.env.NODE_ENV || 'all' }
};


/*处理命令行参数*/
let minimist = require('minimist');
/**
 * [options 获取新的命令行参数]
 * @type {[命令行参数]}
 */
let options = minimist(process.argv.slice(2), knownOptions);

/* 获取任务路径 */
let taskSrc = require('./options/taskSrc')(options);



/* config 基础参数配置文件 */
let config = require('../config');


let DEST = config.dest;
let MD5BASE = path.join(process.cwd(), DEST);
let MD5PATH = DEST + 'md5-map.json';


gulp.task('md5:js', function() {
    return gulp.src(taskSrc.js.md5)
        .pipe(uglify())
        .pipe(rev())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(DEST))
        .pipe(rev.manifest(MD5PATH, {
            base: MD5BASE,
            merge: true
        }))
        .pipe(gulp.dest(DEST));
});

gulp.task('md5:css', function() {
    return gulp.src(taskSrc.css.md5)
        .pipe(cssnano({
            safe: true
        }))
        .pipe(rev())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(DEST))
        .pipe(rev.manifest(MD5PATH, {
            base: MD5BASE,
            merge: true
        }))
        .pipe(gulp.dest(DEST));
});