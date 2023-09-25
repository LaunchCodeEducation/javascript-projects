//function sayHello() {
   //console.log("Hello, World!");

   
let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

//console.log(isEven(43));


let names = ["Lena", "James", "Julio"];

for (let i = 0; i < names.length; i++) {
   //console.log(names[i]);
}
function printNames(names) {
    for (let i = 0; i < names.length; i++) {
        //console.log(names[i]);
    }
}
function sayHello() {
    //console.log("Hello, World!");
}

function sayHello() {
    //console.log("Hello, World!");
}

sayHello();

function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//console.log(sumToN(3));

function pastThePointOfReturn() {
    return "I'm done!";
    console.log("This will not be printed");
}

console.log(pastThePointOfReturn());