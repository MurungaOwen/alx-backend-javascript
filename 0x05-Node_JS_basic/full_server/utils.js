const fs = require('fs');

function readDatabase(path) {
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
          const csStud = [];
          const swStud = [];
          results.forEach((val) => {
            if (val[3].startsWith('CS')) {
              csStud.push(val[0]);
            } else if (val[3].startsWith('SWE')) {
              swStud.push(val[0]);
            }
          });
          const csArr = [];
          csStud.forEach((val) => {
            csArr.push(` ${val}`);
          });
  
          const swArr = [];
          swStud.forEach((val) => {
            swArr.push(` ${val}`);
          });
  
          const myObject = {
            CS: csArr,
            SWE: swArr,
          };
          resolve(myObject);
        }
      });
    });
  });
}

module.exports = readDatabase;
