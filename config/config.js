/**
 * 数据库连接
 * Created by L on 2015/6/27.
 */

'use strict';

const mysql = require('mysql');

/**
 * Exports
 */

module.exports = function (app) {

    // 配置mysql连接

    var options = {
        host    :   'localhost',
        user    :   'root',
        password:   '',
        database:   'game'
    };

    // var dblink = process.env.MYSQLHQ_URL || ''

    const _db = mysql.createConnection(options);

    //
    //app.query = function() {
    //    _db.connect(function(err){
    //        if (err) {
    //            console.error('error connecting: ' + err.stack);
    //            return;
    //        }
    //
    //        console.log('connected as id ' + _db.threadId);
    //    })
    //}

    app.db = function() {
        return _db;
    };

    return app;
};
