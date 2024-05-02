//Run this code first and examine the error message.
//Fix the syntax error then run the code again to check your work.

let crewReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   crewReady = false;
}