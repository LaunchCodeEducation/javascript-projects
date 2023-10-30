// Declare and assign the variables below
let shuttle = 'Determination';
let shuttleSpeedMPH = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKM = 38400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof ("Determination"));
console.log(typeof (17500));
console.log(typeof (225000000));
console.log(typeof (38400));
console.log(typeof (0.621));
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
console.log(milesToMars)
let hoursToMars = milesToMars / shuttleSpeedMPH;
console.log(hoursToMars)
let daysToMars = hoursToMars / 24;
console.log(daysToMars)
// Print the results of the space mission calculations below
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKM * milesPerKm;
console.log(milesToMoon);
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
console.log(hoursToMoon);
let dayToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
let shuttleName = "Determination"
console.log(shuttleName + " will take " + dayToMoon + " days to reach the Moon. ")