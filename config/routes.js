/**
 * 路由
 * Created by L on 2015/6/27.
 */

module.exports = function (app) {

    var av = require('../app/controllers/av_c')(app);

    // load database

    var db = app.db();

    // av route

    app.get('/av/id/:id', av.queryById);
    app.get('/av/all', av.all);


    // test
    app.get('test', av.test);
}
