const nameOfShuttle = "determination";
const shuttleSpeed = 17500;
const marsDis = 225000000;
const moonDis = 38400;
const mpkh = .621;
// Seconde set of instructions //
console.log(typeof(nameOfShuttle));
console.log(typeof(shuttleSpeed));
console.log(typeof(marsDis));
console.log(typeof(moonDis));
console.log(typeof(mpkh));
// Third set of instructions //
console.log(marsDis * mpkh); // How many Miles to Mars? //
console.log(marsDis / shuttleSpeed); // Hours it will take to get to Mars in hours //
let hoursToMars = marsDis / shuttleSpeed; // Assignment of the solution to define hoursToMars //
let daysToMars =  hoursToMars / 24; // Assignment of daysToMars after solution //
console.log(hoursToMars);
console.log(daysToMars);
// Time to print the solution //
console.log(nameOfShuttle,"will take",daysToMars,"to reach mars"); // Solution to exersize UwU //
// Equation challenge for Moon //
console.log(moonDis * mpkh);
console.log(moonDis/shuttleSpeed);
let hoursToMoon = moonDis/shuttleSpeed;
let daysToMoon = hoursToMoon / 24;
console.log(nameOfShuttle, "will take",daysToMoon, "to reach the Moon");
