// Declare and assign the variables below
let nameSS="Determination";
let sSpeedMph=17500;
let dToMarsKM=225000000;
let dToMoonKM=384400;
let mPk=0.621
// Use console.log to print the 'typeof' each variable. Print one item per line.
 console.log(typeof(nameSS));
 console.log(typeof(sSpeedMph));
 console.log(typeof(dToMarsKM));
 console.log(typeof(dToMoonKM));
 console.log(typeof(mPk));
// Calculate a space mission below
let milesToMars 
milesToMars=dToMarsKM * mPk;
console.log(milesToMars);

let hoursToMars= milesToMars/sSpeedMph;
console.log(hoursToMars);

let daysToMars= hoursToMars/24;
console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(nameSS +" will take "+ daysToMars + "days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon 
milesToMoon=dToMoonKM * mPk;
console.log(milesToMoon);

let hoursToMoon= milesToMoon/sSpeedMph;
console.log(hoursToMoon);

let daysToMoon= hoursToMoon/24;
console.log(daysToMoon);
// Print the results of the trip to the moon below
console.log(nameSS +" will take "+ daysToMoon + "days to reach Moon.")
