//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log();
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let firstInitial = language[0];
let lastInitial = language[4];

let outputStr = `"The abbreviation for 'JavaScript' is" '${firstInitial}${lastInitial}'.`;

console.log(outputStr);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.charAt(1).toUpperCase + notTitleCase.slice(2,5) + notTitleCase.charAt(7).toUpperCase + notTitleCase.slice(7,10) );