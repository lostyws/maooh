'use strict';

/**
 * taskSrc.js
 * @author zhanghaiyang<403724532@qq.com>
 * @version 1.0.0
 */

/* config 基础参数配置文件 */
let config = require('../../config');


/**
 * [taskSrc 获取对应任务的src]
 * @param  {[Object]} args [命令行参数]
 * @return {[type]}      [description]
 */
function taskSrc(args) {
    //console.log(args)
    let src = args.src;

    var obj = config[src];


    //console.log(obj);

    /* 如果对应的目录存在 */
    if(obj) {
        return obj;
    }
    
    return config['all'];
}

module.exports = taskSrc;



