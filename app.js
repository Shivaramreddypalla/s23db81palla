require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var watchRouter = require('./routes/Watch');
var gridbuildRouter = require('./routes/board');
var Watch = require("./models/Watch");
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Watch', watchRouter);
app.use('/board', gridbuildRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

async function recreateDB() {
  try {
    // Define a timeout value in milliseconds
    const timeout = 30000; // 30 seconds
    // Delete everything with a timeout
    const deleteManyPromise = Watch.deleteMany({}).exec();
    
    // Use Promise.race to race the deleteManyPromise against a timeout promise
    await Promise.race([
      deleteManyPromise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('Operation timed out')), timeout))
    ]);

    console.log("Deletion successful");

  let instance1 = new 
  Watch({watchModel:"Rolex", watchYear:'2021', 
  watchPrice:1200});
  await instance1.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("First object saved")
  //});
 
  let instance2 = new 
  Watch({watchModel:"Rado", watchYear:'2020', 
  watchPrice:700});
  await instance2.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("second object saved")
  //});
 
  let instance3 = new 
  Watch({watchModel:"Fossil", watchYear:'2022', 
  watchPrice:229});
  await instance3.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("Third object saved")
  //});
 
} catch (error) {
  console.error("Error during deleteMany:", error.message);
}
}
 let reseed = true;
 if (reseed) { recreateDB();}


module.exports = app;
