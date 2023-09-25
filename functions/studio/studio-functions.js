//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Part One: Reverse Characters

// 1. Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
// 2. Within the function, split the string into an array, then reverse the array.
// 3. Use join to create the reversed string and return that string from the function.
// 4. Below the function, define and initialize a variable to hold a string.
// 5. Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
// 6. Optional: Use method chaining to reduce the lines of code within the function.

const reverseCharacters = function (thingToReverse) {
  if (typeof thingToReverse === "string") {
    return thingToReverse.split("").reverse().join("");
  } else if (typeof thingToReverse === "number") {
    return Number(reverseCharacters(thingToReverse.toString()));
  }
};
const reversedString = reverseCharacters(1234);
console.log(reversedString);

// Part Two: Reverse Digits

// 1. Add an if statement to reverseCharacters to check the typeof the parameter.
// 2. If typeof is ‘string’, return the reversed string as before.
// 3. If typeof is ’number’, convert the parameter to a string, reverse the characters, then convert it back into a number.
// 4. Return the reversed number.
// 5. Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

// Part Three: Complete Reversal

// 1. Define and initialize an empty array.
// 2. Loop through the old array.
// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
// 5. Return the final, reversed array.
// 6. Be sure to print the results from each test case in order to verify your code.

const arrayReversal = function (anArray) {
  let newArray = [];

  for (let i = 0; i < anArray.length; i++) {
    let reversedSet = reverseCharacters(anArray[i]);
    newArray.push(reversedSet);
  }
  return newArray.reverse();
};

let arrayTest1 = ["apple", "potato", "Capitalized Words"];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ["hello", "world", 123, "orange"];

console.log(arrayReversal(arrayTest1));

console.log(arrayReversal(arrayTest2));

console.log(arrayReversal(arrayTest3));

// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.

const funPhrase = function (aString) {
  aNewArray = [];

  if (aString.length < 4) {
    aNewArray.push(aString[aString.length - 1]);
  } else {
    let tempArray = [];
    for (let i = 0; i < 3; i++) {
      tempArray.push(aString[i]);
    }
    aNewArray.push(tempArray.join("").toString());
  }

  return `We put the ${aNewArray.toString()} in ${aString}.`;
};

const testString = "Functions rock!";

console.log(funPhrase(testString));

// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”

const areaOfRectangle = function (length, width = length) {
  return length * width;
};

const rectLength = 2;
const rectWidth = 4;

console.log(`The area is ${areaOfRectangle(rectLength)}`);
