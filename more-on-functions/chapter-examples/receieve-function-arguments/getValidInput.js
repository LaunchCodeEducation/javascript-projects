const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}
let startsWithA = function(input) {
    return input[0].toLowerCase() === "a";
}
console.log(getValidInput("Enter a string that starts with 'a': ", startsWithA));
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
