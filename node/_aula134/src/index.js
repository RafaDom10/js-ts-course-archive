require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongoose =require('mongoose');

const app = express();

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.emit('done');
  }).catch(err => console.log(err));

app.use(express.static('./public'))

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.on('done', () => {
  app.listen(3000, () => console.log('> Server started at http://localhost:3000'));
});
