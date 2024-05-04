const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const lines = data.trim().split('\n');
          const results = lines.map((line) => line.split(','));
          let csTotal = 0;
          const csStud = [];
          let swTotal = 0;
          const swStud = [];
          results.forEach((val) => {
            if (val[3].startsWith('CS')) {
              csTotal += 1;
              csStud.push(val[0]);
            } else if (val[3].startsWith('SWE')) {
              swTotal += 1;
              swStud.push(val[0]);
            }
          });

          const msg1 = `Number of students: ${lines.length - 1}\n`;
          const msg2 = `Number of students in CS: ${csTotal}. List: ${csStud.join(', ')}\n`;
          const msg3 = `Number of students in SWE: ${swTotal}. List: ${swStud.join(', ')}`;
          const final = `${msg1}${msg2}${msg3}`;
          console.log(final);
          resolve(final);
        }
      });
    });
  });
}

module.exports = countStudents;
