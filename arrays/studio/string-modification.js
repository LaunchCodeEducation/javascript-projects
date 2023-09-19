const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstLetter = str.slice(0,3);
console.log(str.slice(0, 3));
let lastLetter = str.replace(str.slice(0,3),"");
console.log(str.replace(str.slice(0,3),""));
console.log(`${lastLetter}${firstLetter}`);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`I do not like ${str} at all but I love ${lastLetter}${firstLetter}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let myNumberletters = input.question("How many character do you need to relocate for the studio? ");
let anyLetters = str.slice(0,myNumberletters); 
let restNumber = str.replace(str.slice(0,myNumberletters),"");
console.log(restNumber + anyLetters);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let myNumberletters = input.question("How many character do you need to relocate for the studio? ");
let anyLetters = str.slice(0,myNumberletters); 
let restNumber = str.replace(str.slice(0,myNumberletters),"");

if (myNumberletters > 3 || str.slice(0,myNumberletters) {
    myNumberletters = 3; 
  { console.log("");
  else
  }