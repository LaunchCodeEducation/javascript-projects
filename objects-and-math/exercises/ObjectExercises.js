let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID:1,
   steps: [],
};

let chimpTwo = {
   name: "Brad",
   species:'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID:2,
   steps: [],
};

let dog1 = {
   namd:'Leroy',
   species:	"Beagle",
   mass:	14,
   age:	5,
   astronautID:3,
   steps: [],
};

let creature = {
   name: "Almina",
   species:	"Tardigrade",
   mass:	0.0000000001,
   age:	1,
   astronautID:4,
   steps: [],
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID:5,
   steps: [],
}; 




// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
function move(steps){
   let crew = [superChimpOne,chimpTwo,dog1,dontKnow,salamander];

   for(i=0;i<crew.length;i++){
   let randomSteps = Math.floor(Math.random()*steps.length)
   crew[i].steps.push(steps[randomSteps]);
   console.log(`${crew[i].name} will move ${crew[i].steps} steps`)
   }
}
move(['step 1','step 2','step 3'])