// Declare and assign the variables below
let nameOfTheSpaceShuttle;
nameOfTheSpaceShuttle = "Determination";
let shuttleSpeed;
shuttleSpeed = 17500;
let distanceToMars;
distanceToMars = 225000000;
let distanceToTheMoon;
distanceToTheMoon = 384400;
const milesPerkilometer = 0.621;






// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof "nameOfTheSpaceShuttle");
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToTheMoon);
console.log(typeof milesPerkilometer);


// Calculate a space mission below

let milesToMars = distanceToMars * milesPerkilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(nameOfTheSpaceShuttle," will take" ,daysToMars," days to reach Mars.")

// Calculate a trip to the moon below
let milesToMoon = distanceToTheMoon * milesPerkilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(nameOfTheSpaceShuttle," will take", daysToMoon,"days to reach Moon.")
