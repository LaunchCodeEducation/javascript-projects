const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(0,3).concat("Lau");
console.log(str2);
//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strLetters = '';
strLetters =  Number(input.question('Enter the number of letters that will be relocated'));
let newStr = str.slice(strLetters);
let newStr2 = str.slice(0,3);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
{
    let strInput = '';
    let strStart = '';
    let strCalc = '';
    let strEnd = '';
    let strFinal = '';

    strInput = input.question("Enter a number from 1-9: ");
    strInput = Number(strInput)

    if (strInput > 9 || strInput < 1){
        console.log('Input outside of range, defaulting to "3"')
        strInput = 3
        strStart = str.slice(0, strInput);
        strCalc = strStart.length - str.length;
        strEnd = str.slice(strCalc);
        strFinal = strEnd.concat(strStart);
        console.log(`LaunchCode? Moar like ${strFinal} amirite? hehe.heh.`)
    } else {
        strStart = str.slice(0, strInput);
        strCalc = strStart.length - str.length;
        strEnd = str.slice(strCalc);
        strFinal = strEnd.concat(strStart);
        console.log(`LaunchCode? Moar like ${strFinal} amirite? hehe.heh.`)
    };
}