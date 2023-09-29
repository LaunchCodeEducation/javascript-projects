//Sample arrays for testing:


let nums3A = [5, 10, 2, 42];
let nums3B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
nums3A.sort(function(a, b){
    return a-b
});               
console.log(nums3A); 
                                                               
//Sort each array in decending order.
nums3B.sort(function(b, a){
    return a-b
});    
console.log(nums3B);

nums3C.sort(function(a, b){
    return b-a
});    
console.log(nums3C);  