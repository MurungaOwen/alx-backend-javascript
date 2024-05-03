const readDatabase = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        res.statusCode = 200;
        res.write('This is the list of our students');
        readDatabase('database.csv')
            .then((data) => {
                const csNames = data["CS"].sort();
                const newCS = [];

                csNames.foreach((val)=>{
                    newCS.push(" " + val);
                });
                const outCs = `Number of students in CS: ${csNames.length}. List: ${newCS}\n`;

                const swNames = data["SW"].sort();
                const newSw = [];

                swNames.foreach((val)=>{
                    newSw.push(" " + val);
                });
                const outSw = `Number of students in SW: ${swNames.length}. List: ${newSw}`;
                res.end(`${outCs}${outSw}`);
            })
        .catch((err) => {
            res.statusCode = 500;
            console.error('Cannot load the database');
        });
    }
}