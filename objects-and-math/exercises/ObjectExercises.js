let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11, 
   sge: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog ={
   name: "Leroy",
   species: "Beagle",
   mass: 14, 
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBear={
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

//Creating Random Astronaut ID
let astronautIDForAnimals = function() {
   return Math.floor(Math.random()*10)+1;
};

//create 5 unique ids
function randomUniqueNum(outputCount)
 {
   let result = [];
   while(result.length !== outputCount)
   {
      let random =astronautIDForAnimals();
      if (result.length===0)
      {
         result.push(random);
      }
      else
      {
         if (!result.includes(random))
         {
          result.push(random);
         }
      }
   }
   return result;
 }

 let uniqueID = randomUniqueNum(5);
 let propertyName = "astronautID"
 
 function assignUniqueAstronutIDtoAnimals(uniqueID)
 {
   superChimpOne[propertyName]=uniqueID[0];
   salamander[propertyName]=uniqueID[1];
   superChimpTwo[propertyName]=uniqueID[2];
   dog[propertyName]=uniqueID[3];
   waterBear[propertyName]=uniqueID[4];
 }

 assignUniqueAstronutIDtoAnimals(uniqueID);

console.log("Super Chimp One Astronaut ID : " + superChimpOne[propertyName]);
console.log("Salamander Astronaut ID : " + salamander[propertyName]);
console.log("Super Chimp Two Astronaut ID : " + superChimpTwo[propertyName]);
console.log("Beagle Astronaut ID : " + dog[propertyName]);
console.log("tardigrade Astronaut ID : " + waterBear[propertyName]);

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

function crewReports()
{
console.log("**********************************************");
console.log(`${superChimpOne.name} is a ${superChimpOne.species}. 
They are ${superChimpOne.age} years old and ${superChimpOne.mass} kilograms. 
Their ID is ${superChimpOne.astronautID}.`);
console.log("**********************************************");
console.log(`${salamander.name} is a ${salamander.species}. 
They are ${salamander.age} years old and ${salamander.mass} kilograms. 
Their ID is ${salamander.astronautID}.`);
console.log("**********************************************");
console.log(`${superChimpTwo.name} is a ${superChimpTwo.species}.
They are ${superChimpTwo.age} years old and ${superChimpTwo.mass} kilograms. 
Their ID is ${salamander.astronautID}.`);
console.log("**********************************************");
console.log(`${dog.name} is a ${dog.species}.
They are ${dog.age} years old and ${dog.mass} kilograms. 
Their ID is ${dog.astronautID}.`);
console.log("**********************************************");
console.log(`${waterBear.name} is a ${waterBear.species}.
They are ${waterBear.age} years old and ${waterBear.mass} kilograms. 
Their ID is ${waterBear.astronautID}.`);
}

console.log(crewReports());

function fitnessTest(candidates)
{
   let results = [], numSteps, turns, count =0;
   for (let i = 0; i < candidates.length; i++)
   {
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  let fitnessTessResults = fitnessTest(crew);
  console.log(fitnessTessResults);

  
  

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!