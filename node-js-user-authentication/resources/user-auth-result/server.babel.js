var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();
app.use(passport.initialize());
require('./strategies/passport-local')(passport);
require('./strategies/passport-jwt')(passport);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

var userRoutes = require('./routes/users')(passport);
var profileRoutes = require('./routes/profile');

// mount routers
app.use('/api/user', userRoutes);

app.use('/api/protected', function(req, res, next) {
  passport.authenticate('jwt', {session:false}, function(err, user, jwtError) {
    if (user) {
      req.login(user, null, () => {})
      next()
    } else  {
      next(jwtError)
    }
  })(req, res, next)
});

app.use('/api/protected', profileRoutes);

app.use('/api/*', function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.error('DEV ERROR')
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.error('PROD ERROR')
    res.json({
      message: err.message,
      error: {}
    });
  });
}





module.exports = app;
