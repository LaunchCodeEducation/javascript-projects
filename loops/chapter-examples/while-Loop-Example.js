// let i = 0;

// while (i < 51) {
//   console.log(i);
//   i++;
// }

// const input = require('readline-sync');

// let num = input.question('Please enter a positive number:');
// num = Number(num);

// while (num <= 0) {
//    num = input.question('Invalid input. Please enter a positive number:');
//    num = Number(num);
// }

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

let n = 10;
let answer = 1;

while (n > 0) {
   answer = answer + n;
   n = n + 1;
}

console.log(answer);