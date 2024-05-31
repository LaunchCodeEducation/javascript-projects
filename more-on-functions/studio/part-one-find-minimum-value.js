//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.


function findSmallestNumber(array) {
  let smallestNumber = array[0];
  for (let index = 0; index < array.length; index++) {
      if (smallestNumber > array[index]) {
          smallestNumber = array[index];
      }
    }
    return smallestNumber;
}
console.log(findSmallestNumber(nums1)); // expect to be 2
console.log(findSmallestNumber(nums2)); // -44
console.log(findSmallestNumber(nums3)); // -3.3
