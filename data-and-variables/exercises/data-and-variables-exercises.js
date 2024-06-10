// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);

console.log(typeof  shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof  distanceToMoonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Use console.log to print the typeof of the results of the calculations below 
//console.log(typeof  milesToMars);
//console.log(typeof  hoursToMars);
//console.log(typeof daysToMars);

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach Moon.");
// Print the results of the trip to the moon below