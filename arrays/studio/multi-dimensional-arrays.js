let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let newFood = food.split().sort();
let newEquipment = equipment.split().sort();
let newPets = pets.split().sort();
let newSleepAids = sleepAids.split().sort();
console.log(newFood, newEquipment, newPets, newSleepAids);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [
    [newEquipment],
    [newFood],
    [newPets],
    [newSleepAids]
]
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let userInput = input.question("Please input a cabinet number (0-3): ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
//tfw you didn't read the question

switch (userInput ) {
    case 0:
        userInput === 0
        console.log("Cabinet 0 contains: " + [food]);
        break;
    case 1:
        userInput === 1
        console.log("Cabinet 1 contains: " + [equipment]);
        break;
    case 2:
        userInput === 2
        console.log("Cabinet 2 contains: " + [pets]);
        break;
    case 3:
        userInput === 3
        console.log("Cabinet 3 contains: " + [sleepAids]);
        break;
    default:
        console.log("Invalid cabinet number!");
}

/*if (userInput === 0) {
    console.log(pets);
} else if (userInput === 1) {
    console.log(equipment);
} else if (userInput === 2) {
    console.log(food);
} else if (userInput === 3) {
    console.log(sleepAids);
} else {
    console.log("Invalid cabinet selected");
};*/
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
