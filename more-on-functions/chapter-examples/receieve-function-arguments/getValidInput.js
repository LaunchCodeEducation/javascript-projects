const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsA = function(str){
  return str[0].toLowerCase()==='a';
};
let hasVowel = function(str){
  if (str[0].toLowerCase()==="a"){
    return true;
  }
  if (str[0].toLowerCase()==="e"){
    return true;
  }
  if (str[0].toLowerCase()==="i"){
    return true;
  }
  if (str[0].toLowerCase()==="o"){
    return true;
  }
  if (str[0].toLowerCase()==="u"){
    return true;
  }
};

console.log(getValidInput('Input a word that starts with the letter a ', startsA));

// TODO 2: write a validator 
// that ensures input is a vowel
console.log(getValidInput('Input a word that starts with a vowel ', hasVowel));
// Be sure to test your code!
