//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  if (integer ===1 ){
    return integer;
  } else {
    console.log(integer);
    return integer*(factorial(integer-1));
  }
}

console.log(factorial(4));

// console.log(factorial(4));

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
let arr=['One', 'i', 'c', 'X', 'i', 'i', 54];
function removeI(arr) 
{
    if (arr.indexOf('i') !== -1)
    {
        console.log("success");
    } 
    else 
    {
    //remove one 'i' entry from array
    //call removeI function again
    }
};
removeI(arr);

function combineEntries(arrayName){
    if (arrayName.length <= 1){
        return arrayName[0];
    } else {
        return arrayName[0]+combineEntries(arrayName.slice(1));
    }
}

console.log(combineEntries(arr));

function decreasingSum(integer) 
{
    if (integer === 1)
    {
        return integer;
    } else 
    {
        //call decreasingSum function again
        return decreasingSum(integer-1);
    }
}

console.log(decreasingSum(5));

function reverse(str) 
{
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }

 let reverseString = function(str) {
    return str.split('').reverse().join('');
 }
console.log(reverseString("vaish"));

let f1 = function(str) {
    return str + str;
 };
 
 let f2 = f1;

 console.log(f1("abcd"));

 let logger = function(errorMsg) {
    console.log("ERROR: " + errorMsg);
 };
 let userInput = "abcd".indexOf('e');
 if (userInput < 0) 
 {
    logger("Invalid input");
 }

 let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let half = function (n) {
    return n/2;
}
let halved = nums.map(half);

console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// TODO: Write a mapping function
// and pass it to .map()
let first_letter = function (f_string){
 return f_string.slice(0,1);
}
let firstInitials = names.map(first_letter);

console.log(firstInitials);

let arr1 = ['One', 'i', 'c', 'X', 'i', 'i', 54];
function removeI(arr1) {
    if (arr.indexOf('i') !== -1){
      return arr1;
    } else {
      arr1.splice(arr1.indexOf('i'),1);
      console.log(arr1);
      return removeI(arr1);
    }
}


 console.log(removeI(arr1));