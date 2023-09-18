const input = require("readline-sync");
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let userInput = input.question("Enter # of letters to be relocated: ");
let numberToMove = 3;
let errorStatement = "";
if (userInput <= str.length) {
  numberToMove = userInput;
} else {
  errorStatement =
    " **The number you entered was too large, we used 3 instead**";
}

const alteredStr =
  str.slice(numberToMove, str.length) + str.slice(0, numberToMove);

const statement = `Original String: ${str}, Altered String: ${alteredStr}${errorStatement}`;

console.log(statement);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
