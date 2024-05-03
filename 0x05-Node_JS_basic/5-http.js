const {createServer} =  require('node:http');
const countStudents = require('./3-read_file_async');
const path = require('node:path');
const hostname = '127.0.0.1';
const port = 1245;


function Home(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
}

function Students(req, res) {
    res.write('This is the list of our students\n');
    try {
        const data = countStudents(process.argv[2], res).then((data)=>{
        res.end(data);
    }).catch((err)=>{
        res.end(err);
    });

    } catch (err) {
      res.end(err.message);
    }
}
const app = createServer((req, res) => {
    const {pathname} = new URL(req.url, `http://${req.headers.host}`);
    if (pathname === '/') {
        Home(req, res);
    } else if (pathname === '/students') {
        Students(req, res);
    } else {
        return;
    }

 });
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });
module.exports = app