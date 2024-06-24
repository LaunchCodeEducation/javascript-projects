//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let fuelValue = 0;
let numberAstronauts = 0 ;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  let flag = true;
while(flag){
  fuelValue = input.question("Please provide the starting fuel level: (Please choose a value between 5000 and 30000)");
  if(fuelValue >5000 && fuelValue <=30000){
    flag = false;
  } else{
    console.log("Value needs to be between 5000 and 30000. Please try again.")
  }
}
  





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

flag = true;
while(flag){
  numberAstronauts = input.question("Please provide the number of astronauts: (up to a maximum of 7)");
    if(numberAstronauts >0 && numberAstronauts <=7){
      flag = false;
    } else{
      console.log("Number of astronauts needs to be between 0 and 7. Please try again.")
  }
}
   
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

flag = true;
let tempAstro = numberAstronauts;
while(tempAstro > 0){
  fuelValue = fuelValue - 100;
  altitude = altitude + 50;
  tempAstro--;
  //console.log(fuelValue + " " + tempAstro + " " + altitude);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log("The shuttle gained an altitude of " + altitude + " km.");
if(altitude >=2000){
  console.log("Orbit achieved!");
}else {
  console.log("Failed to reach orbit.");
}