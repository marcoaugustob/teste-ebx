const express = require('express');
const app = express()

app.use('/', require('./route/moviesRoute'));

app.listen(3000);