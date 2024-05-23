//let str="kayak";
const input = require('readline-sync');
str = input.question("Enter a string: ");
function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;

}
console.log(reverse(str));
console.log(isPalindrome(str));