const express = require('express');
const app = express()

//app.use('/', require('./route/moviesRoute'));
app.get('/', (req, res) => {
    res.json({'message': 'ok'});
  })
app.listen(3000);