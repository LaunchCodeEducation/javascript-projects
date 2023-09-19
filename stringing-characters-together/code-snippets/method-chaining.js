//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(2,5).toUpperCase());
console.log(word.slice(4).toLowerCase());
console.log(word);

let language = "JavaScript";
console.log(language.slice(0,5));//0-reverse order
console.log(language);
console.log(language.slice(1,6));
console.log(language);

let org = "  \"The LaunchCode Foundation\" ";
let trimmed = org.trim();

console.log(trimmed);

//Experiment with other combinations (chains) of string methods.
let language1= "JavaScript";
console.log(language1.replace('J', 'Q'));