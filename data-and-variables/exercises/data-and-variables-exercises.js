// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.
/*
Data	Value
Name of the space shuttle	Determination
Shuttle Speed (mph)	17,500
Distance to Mars (km)	225,000,000
Distance to the Moon (km)	384,400
Miles per kilometer	0.621
*/
// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
let shuttleName = "Determination";
let shuttleSpeed = 175000;
let distanceMars = 225000000;
let distanceMoon = 384400;
let milesPerKilometer = 0.621;

let milesToMars = distanceMars*milesPerKilometer;
console.log("Distance to Mars in Miles:"+ milesToMars);
let timeToMars = milesToMars/shuttleSpeed;
console.log("Time to Mars:" + timeToMars);
let daysToMars = timeToMars/24;
console.log("Days to Mars:"+daysToMars);
console.log (shuttleName+ " will take " + daysToMars +" days to reach Mars.");

let milesToMoon = distanceMoon*milesPerKilometer;
console.log("Distance to Moon in Miles:"+ milesToMoon);
let timeToMoon = milesToMoon/shuttleSpeed;
console.log("Time to Moon:" + timeToMoon);
let daysToMoon = timeToMoon/24;
console.log("Days to Mars:"+daysToMars);
console.log (shuttleName+ " will take " + daysToMoon +" days to reach the Moon.");