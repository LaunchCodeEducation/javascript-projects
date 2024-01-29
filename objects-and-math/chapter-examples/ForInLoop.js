let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: 
   function() 
   {
      return this.name + " is a " + this.species;
   }
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the 
//value to the console.
console.log(tortoiseOne);
console.log(tortoiseOne.species);
console.log(tortoiseOne.sign());

console.log(tortoiseOne["name"]);
console.log(tortoiseOne.name);

console.log(tortoiseOne.weight);
newWeight = tortoiseOne.weight + 10;
tortoiseOne["weight"] = newWeight;
console.log(tortoiseOne["weight"]);

tortoiseOne["place_name"] = "jungle";
console.log(tortoiseOne);

let tortoiseTwo = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919
};

console.log(tortoiseTwo);

tortoiseTwo["age"] = 120;
tortoiseTwo["speed"] = 'Faster than the hare.'

console.log(tortoiseTwo);
console.log(tortoiseTwo.age);

let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves",
   birthday: function () { return this.age = this.age + 1;}
 };

 console.log(giraffe.birthday());
 
 let tortoiseThree = {
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseFour = {
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseThree === tortoiseFour);

let giraffeOne = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };

 for (item in giraffeOne) {
    console.log(item + ", " + giraffe[item]);
 }

 let giraffeThree = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };

 function birthday(animal) {
     animal.age = animal.age + 1;
     
     return animal;
 }

 console.log(giraffeThree.age);

 birthday(giraffeThree);

 console.log(giraffeThree.age);

 let tortoiseFive = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseSix = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseFive == tortoiseSix);
console.log(tortoiseFive === tortoiseSix);
console.log(tortoiseFive.age === tortoiseSix.age);