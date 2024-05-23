const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
degreesC = Number(degreesC);
let dergeesK = degreesC + 273.15;

console.log('Degrees K:', dergeesK);
