/**
 * 成就系统
 * Created by L on 2015/6/27.
 */

'use strict';

// set all global variables
var av = {}
    , app
    , db;

// constructor

module.exports = function (_app) {
    app = _app;
    db = app.db();

    return av;
};


/**
 * 根据id查询成就
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
av.queryById = function (req, res, next) {

    // query
    db.query('select `id`, `av_s`, `av_f`, `score`, `total` from `achievement` where `id` = ?', [req.params.id],
        function(err, rows){
            if (err) {
                console.error('error query achievement ' + err.stack);
                return;
            }

            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                // JSON.parse('{"This is no achievements!!!"}')
                res.header('Content-Type', 'text/plain');
                res.charSet('utf-8');
                res.send('没有成就数据!!!');
                //var msg = {
                //    message: 'This is no achievements!!!'
                //};
                //res.send(JSON.stringify(msg));
            }

        });
    return next();
};


/**
 * 查询所有成就
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
av.all = function (req, res, next) {

    // query
    db.query('select * from `achievement`', function(err, rows){
            if (err) {
                console.error('error query achievement ' + err.stack);
                return;
            }

            if (rows.length > 0) {
                res.send(rows);
            } else {
                res.send('没有成就数据');
            }

        });
    return next();
};

/**
 * 测试
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
av.test = function (req, res, next) {
    res.send('this is a test get request');
    return next();
};