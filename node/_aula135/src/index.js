require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongoose =require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const app = express();

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.emit('done');
  }).catch(err => console.log(err));

app.use(express.static('./public'))

const sessionOptions = session({
  secret: '123456abcdef',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.on('done', () => {
  app.listen(3000, () => console.log('> Server started at http://localhost:3000'));
});
