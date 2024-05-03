const {createServer} =  require('node:http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
 });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });

module.exports = app