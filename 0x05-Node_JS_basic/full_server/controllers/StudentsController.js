const readDatabase = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        res.statusCode = 200;
        let resp = 'This is the list of our students\n';
        try{
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
                    resp += `${outCs}${outSw}`;
                    res.status(200).send(resp)
                })
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
        
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const data = await readDatabase();

            const studentsInMajor = data.filter(student => student.field.toUpperCase() === major);

            const firstNames = studentsInMajor.map(student => student.firstname);

            const responseBody = `List: ${firstNames.join(', ')}`;

            res.status(200).send(responseBody);
        } catch (error) {
            // If the database is not available, return a status 500 with an error message
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
