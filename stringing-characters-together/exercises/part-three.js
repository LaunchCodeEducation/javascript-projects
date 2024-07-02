//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let first = language.slice(0,1);
let second = language.slice(4,5);
console.log(first + second);
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(0) + language.charAt(4));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log("The abbreviation for 'JavaScript' is '" + language[0]+language[4] + "'.");
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.slice(0,4).replace("ava", "eff").toUpperCase());
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let titleCase = notTitleCase.replace("t", "T").replace("c","C");
console.log(titleCase);