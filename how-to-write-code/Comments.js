   // This demo shows off comments!

   // console.log("This does not print.");

   console.log("Hello, World!"); // Comments do not have to start at the beginning of a line.

   /* Here is how
   to have
   multi-line
   comments. */

   console.log("Comments make your code more readable by others.");

   function printArray(names) {
      for (let i = 0; i < names.length; i++) {
          console.log(names[i]);
      }
  }
  
  printArray(["Lena", "James", "Julio", "vaish"]);
  console.log("---");
  printArray(["orange", "apple", "pear"]);

  function doNothing() {}

let returnVal = doNothing();
console.log(returnVal);

function pastThePointOfReturn() {
   return "I'm done!";
   console.log("This will not be printed");
}

console.log(pastThePointOfReturn());

function countToN(n) {
   let count = 1;
   while (true) {
       if (count > n) {
           return;
       }
       console.log(count);
       count++;
   }
}

countToN(100);

function isEven(n) {
   if (n % 2 === 0) {
       return true;
       
   }
   return false;
}
let temp =isEven(2);
console.log(temp);

console.log("LaunchCode".slice(6,10));

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
   console.log(a);
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43));






