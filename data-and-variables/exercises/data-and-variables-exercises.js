// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = "17500";
let marsDistanceKm = "225000000";
let moonDistanceKm = "384400";
const milesPerKm = "0.621";
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof marsDistanceKm);
console.log(typeof moonDistanceKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = marsDistanceKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars. ");
// Calculate a trip to the moon below
let milesToMoon = moonDistanceKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon/ 24;
// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon. ");
