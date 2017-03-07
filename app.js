var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var routes = require('./routes/mapping');
var users = require('./routes/users');
var session = require('express-session');
//var list = require('./routes/list');
//var deptList = require('./routes/deptList');
//var searchList = require('./routes/searchList');
//var bossList = require('./routes/bossList');


var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
    watch: true
});
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
//app.use('/deptList', deptList);
//app.use('/searchList',searchList);
//app.use('/bossList',bossList);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function(req,res,next){
    console.log("1111")
    res.locals.user = req.session.user;   // 从session 获取 user对象
    var err = req.session.error;   //获取错误信息
    delete req.session.error;
    res.locals.message = "";   // 展示的信息 message
    if(err){
        res.locals.message = err;
    }
    next();  //中间件传递
});

// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




module.exports = app;
