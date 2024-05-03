const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
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
            } else if(val[3].startsWith('SWE')) {
                swTotal += 1;
                swStud.push(val[0])
            } else{
                return;
            }
        });
        process.stdout.write(`Number of students: ${lines.length - 1}\n`);
        process.stdout.write(`Number of students in CS: ${csTotal}. List: ${csStud}\n`);
        process.stdout.write(`Number of students in SWE: ${swTotal}. List: ${swStud}`);
    } catch (error) {
        throw new Error("Cannot load the database");
    } 
}

module.exports = countStudents;
