
console.log(Math.PI);
console.log(Math.PI*4);
console.log(Math.PI + Math.PI);

console.log(Math.PI);

Math.PI = 1234;

console.log(Math.PI);
console.log(Math.sqrt(64));

function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 

 console.log(Math.floor(-3.87));
 console.log(Math.random(-3.87));
console.log(Math.round(-3.87));
console.log(Math.trunc(-3.87));

let num = Math.floor(Math.random()*10);
console.log(Math.random());
console.log(num);

let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

for (i=0; i < 8; i++){
  console.log(randomSelection(happiness));
}

console.log (Math.round(12.3456789*10000)/10000);

 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness.
 // Print the new array.