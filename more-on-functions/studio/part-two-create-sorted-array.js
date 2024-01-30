function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
//Within the function:
//Your function here...
function sortNumArr(arr){
  let minValue;
  //1) Define a new, empty array to hold the final sorted numbers.
  let sortedArr = [];
  while(arr.length !== 0){
    //2) Use the findMinValue function to find the minimum value in the old array.
    minValue = findMinValue(arr);
    //3) Add the minimum value to the new array, and remove the minimum value from the old array.
    sortedArr.push(minValue);
    arr.splice(arr.indexOf(minValue), 1);
  //4) Repeat parts b & c until the old array is empty.
  }
  //5) Return the new sorted array.
  //console.log("sorted Array : "+sortedArr);
  return sortedArr;
  //6) Be sure to print the results in order to verify your code.*/
}

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("sorted Array nums1 :" +sortNumArr(nums1));
console.log("sorted Array nums2 :" +sortNumArr(nums2));
console.log("sorted Array nums3 :" +sortNumArr(nums3));