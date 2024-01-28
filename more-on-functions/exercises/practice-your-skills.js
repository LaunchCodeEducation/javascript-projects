//Create an anonymous function and set it equal to a variable.
let anonymFunc = function(data){
    //Your function should:
    //a) If passed a number, return the tripled value.
    if(typeof(data) === 'number'){
        return data * 3;
    } 
    //b) If passed a string, return the string “ARRR!”
    else if(typeof(data) === 'string'){
        return "ARRR!";
    } 
    else{
        return data;
    }
    //c) Be sure to test your function before moving on the next part. 
}
/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let arr = ['Elocution', 21, 'Clean teeth', 100];
console.log(arr.map(anonymFunc));