const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
if (userInput < 0) {
<<<<<<< HEAD
   logger("Invalid input");
=======
 function('invalid input')
  // _function_____("Invalid input");
>>>>>>> 20a3dd1998d98b668be0ab68cf0b1e720d335dc5
}
console.log(logger)
// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.
