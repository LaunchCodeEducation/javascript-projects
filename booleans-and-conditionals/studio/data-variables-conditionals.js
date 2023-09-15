let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
// Initialize Variables below

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Crew Count: Ready");
}
if (astronautStatus === "ready"){
    console.log("ready");
}
if (totalMassKg <= maximumMassLimit) {
    console.log("heavy");
}
if ((fuelTempCelsius >= -300) && (fuelTempCelsius <= -150)) {
    console.log("cold");
}
if (fuelLevel === 100) {
    console.log("warm");
}
if (weatherStatus === "clear") {
    console.log("ready");
}




// add logic below to verify all astronauts are ready
if (astronautCount <= 7)  (astronautStatus === "ready") && (totalMassKg <= maximumMassLimit) && ((fuelTempCelsius >= -300) && (fuelTempCelsius <= -150)) && (fuelLevel === 100) && (weatherStatus === "clear")
    console.log("All systems are a go! Initiating space shuttle launch sequence")
    console.log("__________________________________")
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count:" + astronautCount);
    console.log("Crew Mass: 564.9kg");
    console.log("Shuttle Mass: 760000kg");
    console.log("Total Mass: 835407.21kg");
    console.log("Fuel Temperature: -225°C");
    console.log("Weather Status: clear");
    console.log("__________________________________");
    console.log("Have a safe trip astronauts!");

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
