const input = require('readline-sync');
let str = "LaunchCode";
console.log(str);
//1) Use string methods to remove the first three characters from the string and add them to the end.

//Hint - define another variable to hold the new string or reassign the new string to str.
let strModified = str.replace("Lau", "") + str.slice(0,3);
console.log(strModified);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter numer of letter to relocate: ");


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let defult = 3;
if(userInput > str.length) {
    console.log("Input number is longer than characters in word");
} else {
        str.modified = str.slice(userInput, str.length ) + str.slice(0, userInput);
        console.log(strModified)
    }
