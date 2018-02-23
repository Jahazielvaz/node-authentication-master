var passport = require('passport');
app.use(passport.initalize());

var userRoutes = require('../routes/user.js')(passport);

app.use('/api/user', userRoutes);


