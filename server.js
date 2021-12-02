const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
  })

app.use('/', require('./route/moviesRoute'));

app.listen(3000);