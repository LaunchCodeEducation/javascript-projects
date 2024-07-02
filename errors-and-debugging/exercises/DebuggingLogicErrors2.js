// Let’s break the code down into smaller chunks.
// Consider the first if/else block below. 
// Add console.log(launchReady) after this block, then run the program.

//Given the fuelLevel value, should launchReady be true or false after the check?  Is the program behaving as expected?

let launchReady = false;
let fuelLevel = 17000;
// let crewStatus = true;
// let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log(launchReady);
// if (crewStatus && computerStatus === 'green'){
//    console.log('Crew & computer cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Crew or computer not ready!');
//    launchReady = false;
// }

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }