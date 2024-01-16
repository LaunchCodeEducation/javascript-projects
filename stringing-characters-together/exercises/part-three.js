//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(`${language[0]}${language[4]}`);

//3. Use bracket notation and a template literal to print, 
//"The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for ${language} is ${language[0]}${language[4]}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(language.slice(0,4).toLowerCase());

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(`${notTitleCase.split(" ",2)[0][0].toUpperCase()}${notTitleCase.split(" ",2)[0].slice(1)} ${notTitleCase.split(" ",2)[1][0].toUpperCase()}${notTitleCase.split(" ",2)[1].slice(1)}`);



