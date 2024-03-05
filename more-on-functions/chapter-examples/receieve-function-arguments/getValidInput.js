const input = require('readline-sync');

function getValidInput(prompt, isValid) 
{
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

let isFirstLetterA = function(n) {
  if (n[0] !== "a")
    return false;
  return true;
};

console.log(getValidInput('Enter a string:', isFirstLetterA));


// TODO 2: write a validator 
// that ensures input is a vowel

let isVowel = function(x){
  return ("aeiouAEIOU".indexOf(x) != -1);
};
console.log(getValidInput('Enter a char:', isVowel));
// Be sure to test your code!


