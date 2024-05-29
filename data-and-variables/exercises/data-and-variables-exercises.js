// Declare and assign the variables below
let spaceShuttle="Determination"
let shuttleSpeed=17500
let distanceToMars=225000000
let distanceToTheMoon=384400
const milesPerKilometer=0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle)
console.log(typeof shuttleSpeed)
console.log(typeof distanceToMars)
console.log(typeof distanceToTheMoon)
console.log(typeof milesPerKilometer)
// Calculate a space mission below
let milesToMars=distanceToMars*milesPerKilometer
// Print the results of the space mission calculations below
console.log(milesToMars)
// Calculate a trip to the moon below
let hoursToMars=milesToMars/shuttleSpeed
console.log(hoursToMars)
// Print the results of the trip to the moon below
let daysToMars=hoursToMars/24
console.log(daysToMars)

let infoMars=spaceShuttle+" will take "+ daysToMars+ " days to reach the Mars"
console.log(infoMars)

let milesToMoon=distanceToTheMoon*milesPerKilometer
console.log(milesToMoon)
let hoursToMoon=milesToMoon/shuttleSpeed
console.log(hoursToMoon)
let daysToMoon=hoursToMoon/24
console.log(daysToMoon)

let infoMoon=spaceShuttle+" will take "+ daysToMoon+ " days to reach the Moon"
console.log(infoMoon)