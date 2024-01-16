// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7 &&
// add logic below to verify all astronauts are ready
astronautStatus === "ready" &&
// add logic below to verify the total mass does not exceed the maximum limit of 850000
totalMassKg < 85000 &&
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
fuelTempCelsius >= -300 && fuelTempCelsius <= -150 &&
// add logic below to verify the fuel level is at 100%
fuelLevel === "100%" &&
// add logic below to verify the weather status is clear
weatherStatus === "clear"){
// Verify shuttle launch can proceed based on above conditions
console.log("Shuttle Information:");
    console.log("Date: " + currentDate);
    console.log("Time: " + currentTime);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + " Celsius");
    console.log("Weather Status: " + weatherStatus);

    // Wish astronauts a safe flight
    console.log("Have a safe flight astronauts!");
} else {
    // Shutdown launch operations if conditions are not met
    console.log("Launch operations are shut down. Conditions not met.");
}