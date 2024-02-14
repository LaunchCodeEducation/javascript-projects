

function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}

function isPalindrome1(str) {
   let reversed = str.split('').reverse().join('');
   return reversed === str;
}



let f1 = function(str) {
   return str + str;
};

let f2 = f1;

console.log(f2("abcd"));
console.log(f1("abcd"));

let logger = 
function(errorMsg) 
{
   console.log("ERROR: " + errorMsg);
};

let userInput = 2%2;
console.log(userInput);
if (userInput == 0) {
  console.log("Invalid input");
}

let nums = [3.14, 42, 4811];

let timesTwo = 
function (n) 
{
    return n*2;
};

let doubled = nums.map(timesTwo);

console.log(nums);
console.log(doubled);

//let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums
            .map(
               function(n)
               {
                  return n/2;
               }
            );

console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(
   function(n)
   {
      return n.slice(0,1);
   }
);
console.log(firstInitials);

const input = require('readline-sync');

function getValidInput(prompt, isValid) 
{

    // Prompt the user, using the prompt string that was passed
    let userInput = input.question(prompt);

    // Call the boolean function isValid to check the input
    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
    return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));

let isValidPassword = function(password) {
   // Passwords should have at least 8 characters
   if (password.length < 8) {
   return false;
   }
   return true;
};

console.log(getValidInput('Create a password:', isValidPassword));

