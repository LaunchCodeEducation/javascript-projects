const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
let newStr1 = str.slice(3);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${newStr1}${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("How many number of letters to be relocated?");
userInput = Number(userInput);
let newStr2 = str.slice(0,userInput);
let newStr3 = str.slice(userInput);
let STR =`${newStr3}${newStr2}`;
console.log(STR);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

STR = "";
if(userInput >= str.length){
    userInput=3;//default
    STR = "String length is only" + str.length ;
}
     STR =`${newStr3}${newStr2}${STR}`;
    console.log(STR);
