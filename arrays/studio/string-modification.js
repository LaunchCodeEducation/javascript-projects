const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
console.log(str.slice(3,str.length));
let newStr = (str.slice(3,str.length) + str.slice(0,3));
console.log(newStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`This is the original string "${str}", and this is the modified string "${newStr}".`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userinput = input.question("Enter a number to reloate from: ");
let userChoice = (str.slice(userinput,str.length)) + str.slice(0,userinput);
console.log(userChoice);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. 
// Also, the template literal should note the error.
let length = (str.length);
if (userinput > length) {
    console.log(newStr)
    console.log(`This words is only ${length} letters long, please try again!`);
} else{
    console.log(userChoice);
}
