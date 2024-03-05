//Create a function with an array of numbers as its parameter. 
//This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

function findMinValue(arr)
{
  let minValue=arr[0];
  for (let item of arr)   
  {
    if (item<minValue)
    {
        minValue=item;
    }
  }
  return minValue;
}
  
function newSortedArray(arr)
{
  let emptyArray = [];
  let count = arr.length;
  for (let i=0;arr.length>0;i++)
  {
    let minNumber = findMinValue(arr);
    emptyArray.push(minNumber);   
    arr.splice(arr.indexOf(minNumber),1);
  }
  return emptyArray;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log (newSortedArray(nums1));
console.log (newSortedArray(nums2));
console.log (newSortedArray(nums3));

// Recursion

let emptyArray = [];
function newSortedArrayRecursion(arr)
{
  if (arr.length===0)
  {
    let finalArray = emptyArray;
    emptyArray =[];
    return finalArray;
  }
  else
  {
     let minNumber = findMinValue(arr);
     emptyArray.push(minNumber);  
     arr.splice(arr.indexOf(minNumber),1);
     return newSortedArrayRecursion(arr);
  }
}

nums1 = [5, 10, 2, 42];
nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("Recursion Function");

console.log(newSortedArrayRecursion(nums1));
console.log(newSortedArrayRecursion(nums2));
console.log(newSortedArrayRecursion(nums3));
