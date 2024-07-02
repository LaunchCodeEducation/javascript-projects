let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = food.split(",").sort().join(",");
let equipmentCabinet = equipment.split(",").sort().join(",");
let petsCabinet =  pets.split(",").sort().join(",");
let sleepAidsCabinet = sleepAids.split(",").sort().join(",");

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let mod = input.question("Please enter a number. Select a cabinet (0 - 3) in the cargoHold ");
if (mod <0 || mod >= cargoHold.length){
    console.log("This is not a number between 0 and 3");
}else{
    console.log(cargoHold[mod]);
}
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
mod = input.question("Please enter a number. Select a cabinet (0 - 3) in the cargoHold ");
let mod2 = input.question("Please enter a number. Select a cabinet (0 - 3) in the cargoHold ");
if ((mod <0 || mod >= cargoHold.length)&&((mod2 <0 || mod2 >= cargoHold[mod].length))){
    console.log("This is not a number between 0 and 3");
}else{
    console.log("the item at this point is: " + cargoHold[mod][mod2]);
}