let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let fCabinet= food.split(",").sort();
let eCabinet= equipment.split(",").sort();
let pCabinet= pets.split(",").sort();
let sCabinet= sleepAids.split(",").sort();
console.log(`${fCabinet}\n${eCabinet}\n${pCabinet}\n${sCabinet}`);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [fCabinet,eCabinet,pCabinet,sCabinet];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let userInput = input.question("Which cabinet (0-3)would you like?");
userInput = Number(userInput);
console.log(userInput);


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. 
//If the user entered an invalid number, print an error message.
if(userInput < cargoHold.length){
    console.log(cargoHold[userInput]);
    
}else{
    console.log("ERROR!!!!!!!!");
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userItem= input.question("which item would you like?");
if(cargoHold[userInput].includes(userItem)){
    console.log(`Cabinet ${userInput} DOES contain ${userItem}.`);
}else {
    console.log(`Cabinet ${userInput} DOES NOT contain ${userItem}.`);
}