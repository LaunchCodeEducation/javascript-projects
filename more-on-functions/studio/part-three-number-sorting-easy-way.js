//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

const increasingOrder1 = nums1.slice().sort((a, b) => a - b);
const increasingOrder2 = nums2.slice().sort((a, b) => a - b);
const increasingOrder3 = nums3.slice().sort((a, b) => a - b);

console.log(increasingOrder1); 
console.log(increasingOrder2); 
console.log(increasingOrder3); 

const decreasingOrder1 = nums1.slice().sort((a, b) => b - a);
const decreasingOrder2 = nums2.slice().sort((a,b) => b - a)
const decreasingOrder3 = nums3.slice().sort((a, b) => b - a);

console.log(decreasingOrder1);
console.log(decreasingOrder2); 
console.log(decreasingOrder3); 