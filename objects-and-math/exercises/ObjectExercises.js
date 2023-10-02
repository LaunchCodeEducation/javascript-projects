let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)} 
   
                                                                     
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
   
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age:  6,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
}

let babyBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 6,
   move: function () {return Math.floor(Math.random()*11)}
}

let tinyTardigrade = {
   name: "Almina",
   species: "tinyTardigrade",
   mass: 0.0000000001,
   age: 1,     
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)}                                                                                           
}

let crew = [superChimpOne, salamander, superChimpTwo, babyBeagle, tinyTardigrade];

let crewReports = function () 
   return '${this.name} is a ${this.species}. They are ${this.age} years old and ${this.species} kilograms. Their ID is ${this.astronautID}.'

  console.log(crewReports);
  
  function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
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

 

  //console.log('${superChimpOne.name} is a ${superChimpOne.species}. They are ${superChimpOne.age} years old and ${superChimpOne.mass} kilograms. Their ID is ${superChimpOne.astronautID}');

//console.log(crew)
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!