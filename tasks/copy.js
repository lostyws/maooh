'use strict';

/**
 * copy.js
 * @author zhanghaiyang<403724532@qq.com>
 * @version 1.0.0
 */
/**
 * Module dependencies
 * gulp copy task
 */
let path = require('path');
/* gulp系列 */
let gulp = require('gulp');
let copy = require('gulp-copy');
let runSequence = require('run-sequence');

/* config 基础参数配置文件 */
let config = require('../config');
let DEST = config.dest;


/**
 * [上线时候的copy任务]
 */


 gulp.task('copy', function(callback) {
    runSequence(['copy:plugins', 'copy:modules'],
        callback);
});



gulp.task('copy:modules', function(callback) {
    return gulp.src(['modules/**/*.{js,css,jpge,jpg,gif,png,woff2,woff,ttf}', '!modules/**/data/**/*.js', '!modules/website/**/*.js', '!modules/admin/**/*.js'])
        .pipe(gulp.dest( DEST + 'modules/'));
});
gulp.task('copy:plugins', function(callback) {
    return gulp.src(['plugins/**/*'])
        .pipe(gulp.dest(DEST + 'plugins/'));
});


