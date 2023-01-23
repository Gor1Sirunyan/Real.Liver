var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var logger = require('morgan');
const passport = require('passport');

const authMiddleware = require('./middleware/auth.js');
var router = express.Router();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');



const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');

var app = express();


//session
const options = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project1',
};

const sessionStore = new MySQLStore(options);



//i18 start



i18next.use(Backend).init({
    backend: {
        loadPath: __dirname + "/locales/{{lng}}/{{ns}}.json",
    },
    debug: false,
    detection: {
        order: ["querystring", "cookie"],
        caches: ["cookie"],
    },
    preload: ["en", "ru"],
    saveMissing: true,
    fallbackLng: ["en"],
    textsVarName: 'translation',
});
app.use(i18nextMiddleware.handle(i18next));

app.get('/login1', (req, res) => {
    const response = req.t('login1');
    res.status(200);
    res.send(response);
});

// app.use(
//     middleware.handle(i18next, {
//         ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /* return true to ignore */ }
//         removeLngFromUrl: false
//     })
// );

//i18 end



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
      secret: 'cookie_secret',
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
        cookie:{maxAge:60000}
    })
);
app.use(passport.session());


app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');


app.use(logger('dev'));




app.use('/:lang/', indexRouter);
app.use('/:lang/users', usersRouter);
app.use('/:lang/auth',authRouter);


//բութսթրափի յուզը
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
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



//use express static folder
app.use(express.static("./public"));

// body-parser middleware use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));




//Database connection

const db = mysql.createConnection({
  host: "localhost:1895",
  user: "root",
  password: "",
  database: "glob"
});

db.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});




module.exports = app;
