// Declare and assign the variables below
const nameOfShuttle = "determination";
const shuttleSpeed = 17500;
const marsDis = 225000000;
const moonDis = 38400;
const mpkh = .621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(nameOfShuttle)) // String //
console.log(typeof(shuttleSpeed)) // Number //
console.log(typeof(marsDis))  // Number  //
console.log(typeof(moonDis))  // Number //
console.log(typeof(mpkh))  // Number //
// Calculate a space mission below
let mTM = marDis * mpkh; // Calculation for Miles to Mars mTM //
let hTM = mTM / shuttleSpeed; // Calculation for Hours to Mars //
let dTM = hTM / 24;



// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below