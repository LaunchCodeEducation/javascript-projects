const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.replace('L',' ').replace('a',' ').replace('u',' ');
console.log(str2);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str}\n${str2}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let answer = ' '; 
let question = 'Enter the number of letters that will be relocated.'
function askQuestion() {
answer = input.question(question);
} 
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
