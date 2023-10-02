let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (item in tortoiseOne) {
   console.log(item + ", " + tortoiseOne[item]);
}

console.log(Math.floor(-3.87));
console.log(Math.random(-3.87));
console.log(Math.round(-3.87));
console.log(Math.trunc(-3.87));

let num = Math.floor(Math.random()*10);

console.log(num);

let num1 = Math.round(Math.random()*10);

console.log(num1);

console.log(Math.round(12.3456789)*100/100);
console.log(Math.round(12.3456789*100)/100);
console.log(Math.round(12.3456789*10000)/10000);
console.log(Math.round(12.3456789)*10000/10000);