//Define three variables for the LaunchCode shuttle - one for the starting fuel level, 
//another for the number of astronauts aboard, and the third for the altitude the shuttle 
//reaches.
const input = require("readline-sync");
let fuelLevel = "";
let numofastronauts = "";
let altitude  = "";


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, 
  //integer value greater than 5000 but less than 30000. */
  fuelLevel = Number(input.question("Enter the starting fuel level: "));
  while (fuelLevel < 5000 || fuelLevel>30000)
  {
    fuelLevel = input.question("Invalid input. Please enter the correct number: ");  
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). 
//Validate the entry.
  
numofastronauts = Number(input.question("Enter the number of astronauts: "));
while (numofastronauts < 1 || numofastronauts>7 || isNaN(numofastronauts) || 
       numofastronauts%1!==0)
{
  numofastronauts = input.question("Invalid input. Please enter the correct number: ");
}
   
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. 
//Each iteration, decrease the fuel level by 100 units for each astronaut aboard. 
//Also, increase the altitude by 50 kilometers.

altitude = Number(input.question("Enter the altitude of shuttle: "))

while(fuelLevel - 100 * numofastronauts  >= 0)
{  
  //console.log(fuelLevel);
  //console.log(altitude);
  altitude += 50;
  fuelLevel -= 100* numofastronauts;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add,
“Failed to reach orbit.”*/

let output = (`The shuttle gained an altitude of ${altitude}km.`);
//console.log(altitude);
if (altitude >= 2000) 
{
  output += " Orbit achieved!";
  console.log("Orbit achieved");
} 
else
{
  console.log("Failed to reach Orbit achieved");
}
console.log(output);