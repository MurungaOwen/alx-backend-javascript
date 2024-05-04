const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    let resp = 'This is the list of our students\n';
    const [data] = await Promise.allSettled([readDatabase(process.argv[2] ? process.argv[2] : 'database.csv')]);
    if (data.value) {
      const csNames = data.value.CS.sort();
      const outCs = `Number of students in CS: ${csNames.length}. List:${csNames}\n`;

      const swNames = data.value.SWE.sort();
      const outSw = `Number of students in SWE: ${swNames.length}. List:${swNames}\n`;

      resp += `${outCs}${outSw}`;
      res.status(200).send(resp);
    } else {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major.toUpperCase() !== 'CS' && major.toUpperCase() !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      const [data] = await Promise.allSettled([readDatabase(process.argv[2] ? process.argv[2] : 'database.csv')]);
      if (data.value) {
        const Names = (major === 'CS') ? data.value.CS : data.value.SWE;
        const outSw = `List:${Names}`;

        res.status(200).send(outSw);
      } else {
        res.status(500).send('Cannot load the database');
      }
    }
  }
}

module.exports = StudentsController;
