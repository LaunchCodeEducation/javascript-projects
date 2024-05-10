let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split('',10));
console.log(str.split(' '));
console.log(str);
// string.split(separator, limit)
// separator	Optional.
// A string or regular expression to use for splitting.
// If omitted, an array with the original string is returned.

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
console.log(arr);
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).


//3) Do split or join change the original string/array?
// Answer: No, they don't change the original string or array.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(",").sort().join());
// or   let cargoHold2 = cargoHold.split(",").sort();
//      console.log(cargoHold2.join());
