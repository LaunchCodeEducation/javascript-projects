const input = require('readline-sync');
str = input.question("Enter a string: ");
function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');

}

console.log(reverse(str));
//console.log(lettersArray);
//console.log(reversedLettersArray);