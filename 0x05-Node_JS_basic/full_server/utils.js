const fs = require('fs');

function readDatabase(path) {
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
                const names =[]
                results.forEach((val)=>{
                    if (!val[0].startsWith('firstname')) {
                        names.push(val[0]);
                    }
                    return;
                });
                resolve(names);
            });
        });
    }); 
    
}

module.exports = readDatabase