const fs = require('fs');

fs.readFile('./planets.txt', 'utf8', (err, data) =>{
    if (err) {
        return console.log(err);
    }
    console.log(data)
});