//string modifications


let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the 
//end. //Hint - define another variable to hold the new string or reassign the new string to str.
//Use a template literal to print the original and modified string in a descriptive phrase.
let first_three_character = str.substring(0,3);
//console.log(first_three_character);
console.log(`The First three characters of ${str} is added at end : ${str.replace(first_three_character, "")}${str.substring(0,3)}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters 
//that will be relocated.
const input = require('readline-sync');
let noToRelocate = input.question("Enter Number of Letters to relocate : ");

//3) Add validation to your code to deal with user inputs that are longer than the word. 
//In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (noToRelocate>str.length)
{
    console.log("Please give a number less than the String's(" +str+ ") Length");
    console.log(`Default Moving 3 Characters : ${str.replace(first_three_character, "")}${str.substring(0,3)}`);
}
else
{
    console.log(`${str.replace(str.substring(0, noToRelocate), "")}${str.substring(0,noToRelocate)}`);
}

