const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    let resp = 'This is the list of our students\n';
    try {
      readDatabase(process.argv[2] ? process.argv[2] : 'database.csv')
        .then((data) => {
          const csNames = data.CS.sort();
          const outCs = `Number of students in CS: ${csNames.length}. List:${csNames}\n`;

          const swNames = data.SWE.sort();
          const outSw = `Number of students in SWE: ${swNames.length}. List:${swNames}\n`;

          resp += `${outCs}${outSw}`;
          res.status(200).send(resp);
        });
    } catch (err) {
      res.status(500).send('Cannot load the database');
      throw new Error('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major.toUpperCase() !== 'CS' && major.toUpperCase() !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        readDatabase(process.argv[2] ? process.argv[2] : 'database.csv').then((data) => {
          const names = [...data[`${major}`]];
          const responseBody = `List:${names}`;
          res.status(200).send(responseBody);
        }).catch(() => {
          res.status(500).send('Cannot load the database');
        });
      }
    } catch (error) {
      // If the database is not available, return a status 500 with an error message
      res.status(500).send(error);
    }
  }
}

module.exports = StudentsController;
