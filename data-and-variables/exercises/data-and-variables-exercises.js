// Declare and assign the variables below
let shuttlename = 'Determination';
let shuttlespeed = 17500;
let marsdistance = 225000000;
let moondistance = 384400;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(shuttlename);
console.log(shuttlespeed);
console.log(marsdistance);
console.log(moondistance)
// Calculate a space mission below
let milestomars = marsdistance * shuttlespeed;
let hourstomars = marsdistance / shuttlespeed;
let daystomars = hourstomars / 24;
// Print the results of the space mission calculations below
console.log(milestomars);
console.log(hourstomars);
console.log(daystomars);
console.log(shuttlename + " will take " + daystomars + " days to reach Mars.");
// Calculate a trip to the moon below
let milestomoon = moondistance * shuttlespeed;
let hourstomoon = moondistance / shuttlespeed;
let daystomoon = hourstomoon /24;

console.log(milestomoon);
console.log(hourstomoon);
console.log(daystomoon);

// Print the results of the trip to the moon below
console.log(shuttlename + " will take " + daystomoon + " days to reach the Moon.");