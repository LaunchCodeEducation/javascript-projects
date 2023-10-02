let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let superBeagOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let superTardiOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1001;
superChimpOne["move"] = function() {
   return Math.floor(Math.random() * 11);
}
salamander["astronautID"] = 1002;
salamander["move"] = function() {
   return Math.floor(Math.random() * 11);
}
superChimpTwo["astronautID"] = 1003;
superChimpTwo["move"] = function() {
   return Math.floor(Math.random() * 11);
}
superBeagOne["astronautID"] = 1004;
superBeagOne["move"] = function() {
   return Math.floor(Math.random() * 11);
}
superTardiOne["astronautID"] = 1005;
superTardiOne["move"] = function() {
   return Math.floor(Math.random() * 11);
}

// Create an array to hold the animal objects.
let crew = [superChimpOne,salamander,superChimpTwo,superBeagOne,superTardiOne];

// Print out the relevant information about each animal.
function crewReports(animal){
   return `${animal.name}` + ' is a ' +`${animal.species}`+'. They are '+`${animal.age}`+' years old and '+`${animal.mass}`+' kilograms. Their ID is '+`${animal.astronautID}`+'.';
}

for(i=0;i<crew.length;i++){
   console.log(crewReports(crew[i]));
}

// Start an animal race!
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

let  race = fitnessTest(crew);

console.log(race);