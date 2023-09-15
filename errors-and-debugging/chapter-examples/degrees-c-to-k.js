const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
degreesC = Number(degreesC)
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK);
