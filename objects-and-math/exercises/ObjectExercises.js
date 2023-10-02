let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tartigrade = {
   name: "Almina",
   species: "Axolotl Salamander",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
function assignRandomAstroID(objects) {
   let usedNumbers = [];
   
   for (const obj of objects) {
     obj['astroID'] = -1; // Initialize 'astroID' property, give to a placeholder value
     
     let randomID;
     do {
       randomID = Math.floor(Math.random() * 11);
     } while (usedNumbers.includes(randomID)); // Check if # is used yet
     
     obj['astroID'] = randomID; 
     usedNumbers.push(randomID); // Push used number to my array? I hope?
   }
 }

assignRandomAstroID([superChimpOne, superChimpTwo, salamander, dog, tartigrade]);

// Create an array to hold the animal objects.

let crew = [superChimpOne, superChimpTwo, salamander, dog, tartigrade];

// Print out the relevant information about each animal.

function crewReport() {
   for (const member of crew) {
      console.log(`${member.name} is a ${member.species}. They are ${member.age} years old and ${member.mass} kilograms. Their ID is ${member.astroID}.`);
   }
}

crewReport();
// Start an animal race!
for (const member of crew) {
   member.move = function () {
     return Math.floor(Math.random() * 4); // Simulate a random number of steps (0-3)
   };
 }
 function fitnessTest(crew){
   let results = [], numSteps, turns;
   for (let i = 0; i < crew.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += crew[i].move();
       turns++;
       }
       results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}

const fitnessResults = fitnessTest(crew);

for (const result of fitnessResults) {
   console.log(result);
}

console.log(superChimpOne);
console.log(superChimpTwo);
console.log(salamander);
console.log(dog);
console.log(tartigrade);