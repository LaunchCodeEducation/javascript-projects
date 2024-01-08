// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof shuttleName);

let milesToMars = distanceToMarsKm * 0.621;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = Math.round(hoursToMars / 24);

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars");

let milesToMoon = distanceToMoonKm * 0.621;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon =hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");