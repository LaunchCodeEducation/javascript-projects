// Declare and assign the variables below
let nameofShuttle='Determination'; 
let shuttleSpeedMph=17500; 
let distanceToMarsKm=225000000; 
let distancetoMoonKm=384400;
const milesPerKm= 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof'Determination');
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distancetoMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars=distanceToMarsKm*milesPerKm
let hrsToMars=milesToMars/shuttleSpeedMph
let daysToMars=hrsToMars/24
// Print the results of the space mission calculations below
console.log(daysToMars);
console.log(nameofShuttle+" will take "+ daysToMars+ " to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon=distancetoMoonKm*milesPerKm
let hrsToMoon=milesToMoon/shuttleSpeedMph
let daysToMoon=hrsToMars/24
// Print the results of the trip to the moon below
console.log(nameofShuttle+ " will take "+ daysToMoon+ " to reach the Moon.");
