//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Part One: Reverse Characters

// 1. Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
// 2. Within the function, split the string into an array, then reverse the array.
// 3. Use join to create the reversed string and return that string from the function.
// 4. Below the function, define and initialize a variable to hold a string.
// 5. Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
// 6. Optional: Use method chaining to reduce the lines of code within the function.
function reverseCharacters(str){
return str.split('').reverse().join('');
}
let stringy = "hello, world!"

console.log(reverseCharacters(stringy));




// Part Two: Reverse Digits

// 1. Add an if statement to reverseCharacters to check the typeof the parameter.
// 2. If typeof is ‘string’, return the reversed string as before.
// 3. If typeof is ’number’, convert the parameter to a string, reverse the characters, then convert it back into a number.
// 4. Return the reversed number.
// 5. Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

function reverseCharacters(input) {
    if(typeof input === 'string'){
        return input.split('').reverse().join('');
    }else if(typeof input === 'number'){
        const reversedString = input.toString().split('').reverse().join('');
        return parseFloat(reversedString) * Math.sign(input);
    } else {
        return 'Unsupported type';
    }
}

let baby = "Hello, Lilah";
let number = 5224;
let negativeNumber = -5224;

console.log(reverseCharacters(baby));
console.log(reverseCharacters(number));
console.log(reverseCharacters(negativeNumber));


// Part Three: Complete Reversal - Create a new function with one parameter, which is the array we want to change. The function should:

// 1. Define and initialize an empty array.
// 2. Loop through the old array.
// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
// 5. Return the final, reversed array.
// 6. Be sure to print the results from each test case in order to verify your code.
function completeReversal(arrayToReverse){
    let reversedArray = [];

    for(let index of arrayToReverse){
        let reversedIndex = reverseCharacters(index);

        reversedArray.push(reversedIndex);
    }
    return reversedArray;
}

let testArray1 = ["Hello", "Lilah", "12345"];
let testArray2 = [123, -456, "Lauren", 0];
let testArray3 = ["Racecar", 9876, -54321];

console.log(completeReversal(testArray1)); // Output: [ 'olleH', 'dlroW', '54321' ]
console.log(completeReversal(testArray2)); // Output: [ 321, -654, 'cba', 0 ]
console.log(completeReversal(testArray3)); 
// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.
function funPhrase(inputString){
    let modifiedString;

    if (inputString.length <= 3){
        modifiedString = inputString.slice(-1);
    }else{
        modifiedString = inputString.slice(0,3);
    }

    return `We put the '${modifiedString}' in '${inputString}'.`;
}
console.log(funPhrase("cat"));        
console.log(funPhrase("banana"));    
console.log(funPhrase("dog"));      
console.log(funPhrase("elephant"));   


// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”

let str = "Functions rock!";

console.log(funPhrase(str));

function funPhrase(inputString){
    let modifiedString;
    if (inputString.length <= 3){
        modifiedString = inputString.slice(-1);
    
    }else{
        modifiedString = inputString.slice(0,3);
    }
    return `We put the '${modifiedString}' in '${inputString}'.`;
}

function calculateArea(length, width = length){
    return length * width;
}

let rectangleArea = calculateArea(10, 5);
console.log(`The area is '${rectangleArea}' cm^2.`);

let squareArea = calculateArea(7);
console.log(`The area is '${squareArea}' cm^2.`);