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

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/
function sorted(arr){
  let temp = [];
  while(arr.length>0){
    temp.push(findMinValue(arr));
    arr.splice(arr.indexOf(findMinValue(arr)),1);
  }
  return temp;
}
//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 /
/function sortedRec(arr){
  if (arr[0]===findMinValue(arr)){
    return;
  }
  min = findMinValue(arr);
  arr.splice(arr.indexOf(findMinValue(arr)),1);
  console.log(arr);
  return sortedRec(arr);
}*/
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
console.log(sorted(nums1));
console.log(sorted(nums2));
console.log(sorted(nums3));
nums1 = [5, 10, 2, 42];
nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
//console.log(sortedRec(nums1));
//console.log(sortedRec(nums2));
//console.log(sortedRec(nums3));