const createError = require('http-errors');
const express = require('express');
const dotenv = require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const fileupload= require('express-fileupload')
const cors =require('cors')
require("./db/databese")


app.use(express.static('./uploads'))

app.use(fileupload())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/'+process.env.DB,
  collection: process.env.STORE
});


app.use(session(
  {
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{ maxAge: 1000*60*60*24 },
    store:store
    
  }
))

app.use(cors())
app.use(flash());
app.use((req,res,next)=>{
  
  res.locals.error= req.flash("error")
  res.locals.loginErr = req.flash("loginErr")
  next()
})





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




///////////////////////////////////////////////

// login
const control = require('./middleware/session')

const login = require("./routes/login")
app.use('/admin',login)


app.use(expressLayouts);

const api = require('./routes/apiRoute')
app.use('/api-data',api)

const dashboard =require('./routes/dashboard')
app.use('/dashboard' , control.isSession  , dashboard)


app.use(function(req, res, next) {

  res.send("404")

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




//////////////////////////////////////////////////
// catch 404 and forward to error handler


app.listen(5000,()=>{console.log('http://localhost:5000/admin');})
