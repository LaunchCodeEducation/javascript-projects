let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require("readline-sync");

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cab1 = food.split(",").sort();
let cab2 = equipment.split(",").sort();
let cab3 = pets.split(",").sort();
let cab4 = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [cab1, cab2, cab3, cab4];

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userInput = input.question("Select a cabinet 0 - 3: ");
let userInput2 = input.question("Give an item name: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userInput > 3 || userInput < 0) {
  console.log("You have entered an invalid cabinet number");
} else {
  console.log(`Cabinet ${userInput} has ${cargoHold[userInput]}`);

  if (cargoHold[userInput].includes(userInput2)) {
    console.log(`Cabinet does contain ${userInput2}`);
  } else {
    console.log(`Cabinet does not contain ${userInput2}`);
  }
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
