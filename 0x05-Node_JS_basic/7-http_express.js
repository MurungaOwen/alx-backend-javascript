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

app.get('/students', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is the list of our students\n');
    try {
        countStudents(process.argv[2]).then((data)=>{
            res.end(data);
        }).catch((err)=>{
            res.end(err);
        });
    } catch (err) {
        res.end(err.message);
    }
});

module.exports = app
