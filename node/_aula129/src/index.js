const express = require('express');
const routes = require('./routes');

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));