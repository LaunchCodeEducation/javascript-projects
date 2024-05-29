//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1).concat(language.slice(4,5)));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language[0]+language[4]);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for "${language}" is "${language[0]+language[4]}". `);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language)
console.log(language.replace(language[3],language[9]));
console.log(language.slice(3,6).concat(language.replace(language[2],language[9])));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.toUpperCase((notTitleCase[0])));
console.log(notTitleCase.replace("t","T").replace("c","C"));