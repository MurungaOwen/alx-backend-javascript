const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

function Home(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
}

async function Students(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');
  const filename = process.argv[2] ? process.argv[2] : 'database.csv';
  const [data] = await Promise.allSettled([countStudents(filename)]);
  if (data.value) {
    res.end(data.value);
  } else {
    res.end('Cannot load the database');
  }
}
const app = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  if (pathname === '/') {
    Home(req, res);
  } else if (pathname === '/students') {
    Students(req, res);
  }
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
