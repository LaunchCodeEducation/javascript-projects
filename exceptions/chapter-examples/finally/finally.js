const input = require('readline-sync');

let animals = [{name: 'cat'}, {name: 'dog'}];
let index = Number(input.question("Enter index of animal:"));

try {
    console.log('animal at index:', animals[index].name);
} catch(TypeError) {
    console.log("We caught a TypeError, but our program continues to run!");
} finally {
    console.log("You tried to access an animal at index:", index);
}

console.log("the code goes on...");
