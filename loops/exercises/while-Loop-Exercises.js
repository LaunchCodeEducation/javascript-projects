//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startFuel = 0;
let astronauts = 0;
let attainableAltitude = 0;

const input = require('readline-sync');

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
 
  while (startFuel <= 5000 || startFuel > 30000 || isNaN(startFuel)) {
     startFuel = input.question("Enter the starting fuel level: ");
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
let astroNum = input.question('Please enter the number of astronauts on board:');
astroNum = Number(astroNum);

while (astroNum > 7) {
   astroNum = input.question('Too many astronauts! Please have some disembark, and then try again:');
   astroNum = Number(astroNum);
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startFuel-100*astronauts >= 0) {
  attainableAltitude += 50;
  startFuel -= 100*astronauts;
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${attainableAltitude} km.`;

if (altitude >= 2000) {
output += " Orbit achieved!";
} else {
output -= " Failed to reach orbit!"
}