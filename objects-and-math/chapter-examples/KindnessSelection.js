function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   //console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 for (i=0; i < 3; i++){
  //console.log(randomSelection(happiness));
}

for (i=0; i < 3; i++){
  //console.log(randomSelection(words));
}
 //b) Have the code randomly pick one array, and then print 2 random items from it.

 function randomSelectFromArrays(array1, array2) {
  const randomIndex1 = Math.floor(Math.random() * array1.length);
  const randomIndex2 = Math.floor(Math.random() * array2.length);
  return [array1[randomIndex1], array2[randomIndex2]];
}

console.log(randomSelectFromArrays(words,happiness));
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

const randomSelection1= randomSelectFromArrays(words,happiness);

console.log(randomSelection1);