const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strTemp = str.slice(3) + str.slice(0,3);

console.log(strTemp);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(str + " is the name of the program. " + strTemp + " is the modified one.")
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let mod = input.question("Please enter a number. This number will number of letters that will be relocated. ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (mod >= str.length){
    console.log("This number is too long. Sorry. Defaulting to 3.");
    strTemp = str.slice(3) + str.slice(0,3);
    console.log(str + " is the name of the program. " + strTemp + " is the modified one.");
}else{
    strTemp = str.slice(mod) + str.slice(0,mod);
    console.log(str + " is the name of the program. " + strTemp + " is the modified one.")
}