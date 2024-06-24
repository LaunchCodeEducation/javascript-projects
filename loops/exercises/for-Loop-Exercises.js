/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//Excercise #1a
console.log("Exercise 1a.");
for (let x = 0; x< 21; x++ ){
  console.log(x);
}

//Exercise #1b. Print only the ODD values from 3 - 29, one number per line.
console.log("Exercise 1b.");
for (let x = 3; x< 30; x = x+2 ){
  console.log(x);
}

//Exercise #1c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
console.log("Exercise 1c.");
for (let x = 12; x> -15; x = x-2 ){
  console.log(x);
}
//Exercise #1d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers).
console.log("Exercise 1d.");
for (let x = 50; x> 20; x-- ){
  if (x%3==0){
    console.log(x);
  }
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
console.log("Exercise 2a.");
let launchCode = "Launch Code";
let array = [1, 5, "LC101", "blue", 42];

for (let x = 0; x<array.length; x++){
  console.log(array[x]);
}

console.log("Exercise 2b.");
for (let x = launchCode.length-1 ; x>=0; x--){
  console.log(launchCode[x]);
}
/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
console.log("Exercise 3");
let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let odds = [];
let evens = [];
for (let x = 0; x< numbers.length;x++){
  let temp = numbers[x];
  if(temp%2===0){
    evens.push(temp);
  }else{
    odds.push(temp);
  }
}
console.log(evens);
console.log(odds);
