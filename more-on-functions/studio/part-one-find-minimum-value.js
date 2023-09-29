//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
    console.log("Part 1 - findMin()");

    function findMin(arr){
        let min = arr[0];
        for (let i = 1; i < arr.length; i++){
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

//Sample arrays for testing:
let nums1A = [5, 10, 2, 42];
let nums2B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMin(nums1A));
console.log(findMin(nums2B));
console.log(findMin(nums3C));
