// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    }
    console.log("The answer is correct");
    return numerator/denominator;
    
 }

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
 divide(12, 0);