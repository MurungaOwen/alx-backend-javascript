const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.access(path,fs.constants.F_OK, (err) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            }
            fs.readFile(path, 'utf8', (err, data) =>{
                if (err) {
                    reject(new Error('Cannot load the database'));
                }
                const lines = data.trim().split('\n');
                const results = lines.map(line=>line.split(','))
                let csTotal = 0
                let csStud = []
                let swTotal = 0
                let swStud = []
                results.forEach((val)=>{
                    if(val[3].startsWith('CS')) {
                        csTotal += 1;
                        csStud.push(val[0]);
                    }
                    else if(val[3].startsWith('SWE')) {
                        swTotal += 1;
                        swStud.push(val[0])
                    }
                    else{
                        return;
                    }
                });
                const final = `Number of students: ${lines.length - 1}\nNumber of students in CS: ${csTotal}. List: ${csStud}\nNumber of students in SWE: ${swTotal}. List: ${swStud}`
                // process.stdout.write(`Number of students: ${lines.length - 1}\n`);
                // process.stdout.write(`Number of students in CS: ${csTotal}. List: ${csStud}\n`);
                // process.stdout.write(`Number of students in SWE: ${swTotal}. List: ${swStud}\n`);
                console.log(final)
                resolve(final);
            });
        });
    }); 
    
}

module.exports = countStudents
