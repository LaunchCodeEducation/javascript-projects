

function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}

function isPalindrome1(str) {
   let reversed = str.split('').reverse().join('');
   return reversed === str;
}

console.log(isPalindrome1("kayak"));

unction plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);

