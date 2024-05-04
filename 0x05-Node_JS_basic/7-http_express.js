const express = require('express');

const countStudents = require('./3-read_file_async');

const app = express();

app.set('port', 1245);

app.listen(app.get('port'), () => {
  console.log('API available on localhost port 1245');
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');
  const filename = process.argv[2] ? process.argv[2] : 'database.csv';
  const [data] = await Promise.allSettled([countStudents(filename)]);
  if (data.value) {
    res.end(data.value);
  } else {
    res.end('Cannot load the database');
  }
});

module.exports = app;
