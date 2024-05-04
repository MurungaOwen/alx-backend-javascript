const express = require('express');

const app = express();

app.set('port', 1245);

app.listen(app.get('port'), () => {
  console.log('API available on localhost port 1245');
});

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

module.exports = app;
