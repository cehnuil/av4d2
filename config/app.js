/**
 * Created by L on 2015/6/27.
 */

'use strict';

/**
 * 加载依赖
 * @type {exports}
 */
const restify       = require('restify')
    , config        = require('./config')
    , routes    = require('./routes');

/**
 * Exports
 */

module.exports = function () {

    // Create Server

    const app = restify.createServer({
        name: 'server',
        version: '1.0.0'
    });

    app.use(restify.acceptParser(app.acceptable));
    app.use(restify.queryParser());
    app.use(restify.bodyParser());

    restify.defaultResponseHeaders = function(data) {
        this.header('Server', 'helloworld');
        this.header('Content-Type', 'application/json; charset=utf-8');
    };

    restify.defaultResponseHeaders = false; // disable altogether


    // 加载mysql模块
    config(app);

    // 加载controller模块
    routes(app);

    return app;
};