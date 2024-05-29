// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false? - FALSE
// Is the program behaving as expected? - YES

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   crewReady = false;
}

console.log("launchReady = ", crewReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewReady = false;
}

console.log("launchReady = ", crewReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }