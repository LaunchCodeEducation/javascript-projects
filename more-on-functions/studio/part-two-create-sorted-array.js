function findMinValue(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

const myFunction = function (numberArray) {
  let newArray = [];
  let totalRuns = numberArray.length;

  for (let j = 0; j < totalRuns; j++) {
    let lowestNum = findMinValue(numberArray);
    numberArray.splice(numberArray.indexOf(lowestNum), 1);
    newArray.push(lowestNum);
  }

  return newArray;
};

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */
const recursiveFunction = function (numberArray) {
  if (numberArray.length === 0) {
    return [];
  } else {
    const lowestNum = findMinValue(numberArray);
    numberArray.splice(numberArray.indexOf(lowestNum), 1);
    return [lowestNum].concat(recursiveFunction(numberArray));
  }
};

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// console.log(myFunction(nums1));
// console.log(myFunction(nums2));
// console.log(myFunction(nums3));

console.log(recursiveFunction(nums1));
console.log(recursiveFunction(nums2));
console.log(recursiveFunction(nums3));
