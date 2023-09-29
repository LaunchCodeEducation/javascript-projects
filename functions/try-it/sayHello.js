//function sayHello() {
   //console.log("Hello, World!");

   
let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

//console.log(isEven(43));


//let names = ["Lena", "James", "Julio"];

//for (let i = 0; i < names.length; i++) {
   //console.log(names[i]);
//}
//function printNames(names) {
    //for (let i = 0; i < names.length; i++) {
        //console.log(names[i]);
    //}
//}
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
    //console.log("This will not be printed");
}

//console.log(pastThePointOfReturn());

let add = function(a, b) {
    return a + b;
};

//console.log(add(1, 1));

function printMessage() {
    //console.log("The future is now!");
}

setTimeout(printMessage, 5000);

setTimeout(function () {
    //console.log("The future is now!");
}, 5000);

//let nums = [3.14, 42, 4811];

//let timesTwo = function (n) {
    //return n*2;
//};

//let doubled = nums.map(timesTwo);

//console.log(nums);
//console.log(doubled);

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map();

//console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map();

//console.log(firstInitials);