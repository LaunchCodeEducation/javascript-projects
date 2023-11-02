// create an array variable containing the names

// write a for loop that prints each name on a different line
const input = require('readline-sync');
let num = input.question('Please enter a positive number:');
num = Number(num);

while (num <= 0) {
   num = input.question('Invalid input. Please enter a positive number:');
   num = Number(num);
}