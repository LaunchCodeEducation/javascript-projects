let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. 
//Alphabetize the contents of each cabinet.
let cabinet1=food.split(",").sort();
console.log(cabinet1);
let cabinet2=equipment.split(",").sort();
console.log(cabinet2);
let cabinet3=pets.split(",").sort();
console.log(cabinet3);
let cabinet4=sleepAids.split(",").sort();
console.log(cabinet4);


//2) Initialize a cargoHold array and add the cabinet arrays to it. 
//Print cargoHold to verify its structure.
let cargoHold = [cabinet1,cabinet2, cabinet3, cabinet4];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let input = require('readline-sync');
let cabinetNumber=input.question("Please Enter Cabinet Number : ");

//4) Use bracket notation and a template literal to display the contents of the 
//selected cabinet. If the user entered an invalid number, print an error message.

if (cabinetNumber>cargoHold.length)
{
    console.log("Please enter Correct Cabinet Number (1-4)");
}
else if (cabinetNumber===0)
{
    console.log("Please enter Correct Cabinet Number (1-4)");
}
else if (isNaN(cabinetNumber))
{
    console.log("Please enter a Number");
}
else
{
    console.log(`The Cabinet Details
             ${cargoHold[cabinetNumber-1]}`);    
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular 
//item. Use the 'includes' method to check if the cabinet contains the selected item, 
//then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetNumber1 = input.question("Please Enter Cabinet Number : ");
let Item_Name = input.question("Please Enter Item Name : ");
if (cabinetNumber1>cargoHold.length)
{
    console.log("Please enter Correct Cabinet Number (1-4)");
}
else if (cabinetNumber1===0)
{
    console.log("Please enter Correct Cabinet Number (1-4)");
}
else if (isNaN(cabinetNumber1))
{
    console.log("Please enter a Number");
}
else if (typeof Item_Name === "number")
{
    console.log("Please enter Item Name correctly");
}
else
{
    if (cargoHold[cabinetNumber1-1].includes(Item_Name)) {
        console.log(`Cabinet ${cabinetNumber1} contains ${Item_Name}.`);
     } else {
         console.log(`Cabinet ${cabinetNumber1} does not contain ${Item_Name}.`);
     }
}
