// First we want to assign the variables their name // 
let nameOfShuttle = "determination";
let shuttleSpeed = 17500;
let marsDis = 225000000;
let moonDis = 38400;
let mpkh = .621;
// Second set of instructions we need to identify the data type of the variable we are re-assigning //
console.log(typeof(nameOfShuttle)); // string //
console.log(typeof(shuttleSpeed)); // number //
console.log(typeof(marsDis)); // number //
console.log(typeof(moonDis)); // number //
console.log(typeof(mpkh)); // number // 
// As we can see after running and debuging we get: string, number, number, number, number; // 
// Third set of instructions we need to write the equation to identify the result of our problem we are trying to resolve//
console.log(marsDis * mpkh); // How many Miles to Mars in mpkh? //
console.log(marsDis / shuttleSpeed); // Hours it will take to get to Mars in hours //
let hoursToMars = marsDis / shuttleSpeed; // Assignment of the solution to define hoursToMars //
let daysToMars =  hoursToMars / 24; // Assignment of daysToMars after solution //
console.log(hoursToMars); // Testing first set of variable instructions to solve for hoursToMars and daysToMars // 
console.log(daysToMars);
// Time to print the solution hooray!!!//
console.log(nameOfShuttle,"will take",daysToMars,"to reach mars"); // Solution to exersize //
// Equation challenge for Moon, Part 2 //
console.log(moonDis * mpkh);// testing the variables on the console for correct result before final equation //
console.log(moonDis/shuttleSpeed);
let hoursToMoon = moonDis/shuttleSpeed; // assignment of variables for equation //
let daysToMoon = hoursToMoon / 24;
console.log(nameOfShuttle, "will take",daysToMoon, "to reach the Moon"); // final part of the equation printed to console //
