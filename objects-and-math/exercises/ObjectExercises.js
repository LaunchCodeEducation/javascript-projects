let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   astronautID: 1,
   age: 6,
   move: function(){
      return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   astronautID: 2,
   age: 5,
   move: function(){
      return Math.round(Math.random()*10);
   }
};

let animalOne = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   astronautID: 3,
   age: 6,
   move: function(){
      return Math.round(Math.random()*10);
   }
};
let animalTwo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   astronautID: 4,
   age: 5,
   move: function(){
      return Math.round(Math.random()*10);
   }
};
let animalThree = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   astronautID: 5,
   age: 1,
   move: function(){
      return Math.round(Math.random()*10);
   }
};
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, animalOne , animalTwo , animalThree];
// Print out the relevant information about each animal.
function crewReports(animalObj){
   return `${animalObj.name} is a ${animalObj.species}. They are ${animalObj.age} years old and ${animalObj.mass} kilograms. Their ID is ${animalObj.astronautID}.`;
}
console.log(crewReports(animalThree));
// Start an animal race!
function fitnessTest(crew){
   let fitnessResult = [], noOfStepsMoved, turns;
   for(let i = 0; i < crew.length; i++){
      noOfStepsMoved = 0;
      turns = 0;
      while(noOfStepsMoved < 20){
         noOfStepsMoved += crew[i].move();
         turns++;
         //console.log(`No.of steps move: ${crew[i].move()} by ${crew[i].name}`);
      }
      fitnessResult.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return fitnessResult;
}
crew.forEach((animal) => {console.log(animal.move(), animal.name)});
console.log(fitnessTest(crew));