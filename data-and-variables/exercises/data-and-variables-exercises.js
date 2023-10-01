// Declare and assign the variables below
let nameShuttle = 'Determination';
let speedShuttle = 17500;
let marsDistanceKm = 225000000;
let moonDistanceKm = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof(nameShuttle));
console.log(typeof(speedShuttle));
console.log(typeof(marsDistanceKm));
console.log(typeof(moonDistanceKm));
console.log(typeof(milesPerKm));

// Calculate a space mission below
let distanceToMars = marsDistanceKm * milesPerKm
let tripDurationMars = distanceToMars / speedShuttle
let daysToMars = tripDurationMars

// Print the results of the space mission calculations below
console.log(`${nameShuttle} will take ${daysToMars} days to reach Mars.`);

// Calculate a trip to the moon below
let distanceToMoon = moonDistanceKm * milesPerKm
let tripDurationMoon = distanceToMoon / speedShuttle
let daysToMoon = tripDurationMoon

// Print the results of the trip to the moon below
console.log(`${nameShuttle} will take ${daysToMoon} days to reach the Moon.`)