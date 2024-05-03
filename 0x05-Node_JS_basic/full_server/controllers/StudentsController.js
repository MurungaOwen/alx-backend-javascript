const readDatabase = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        res.statusCode = 200;
        res.write('This is the list of our students');
        const data = readDatabase()
    }
}