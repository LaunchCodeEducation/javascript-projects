let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(typeof(num));
console.log(String(num).length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
console.log(typeof(num));
console.log(String(num).length-1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (num%1===0){//this is an integer
    console.log(String(num).length);
}else{
    console.log(String(num).length-1);
}