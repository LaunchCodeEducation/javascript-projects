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
let fuelLevel = "100%"
let weatherStatus = "clear";
let preparedForLiftOff =true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("astronaut count is safe to lift off");
} else {
    console.log("astronaut count is NOT safe");
    preparedForLiftOff=false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("astronaut Status safe to lift off");
} else {
    console.log("astronaut Status NOT safe");
    preparedForLiftOff=false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < 850000) {
    console.log("total MassKg is safe to lift off");
} else {
    console.log("total MassKg is NOT safe to lift off");
    preparedForLiftOff=false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
    console.log("fuelTempCelsius is safe to lift off");
} else {
    console.log("fuelTempCelsius is NOT safe to lift off");
    preparedForLiftOff=false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("fuelLevel is safe to lift off");
} else {
    console.log("fuelLevel is NOT safe");
    preparedForLiftOff=false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("weatherStatus is safe to lift off");
} else {
    console.log("weatherStatus is NOT safe");
    preparedForLiftOff=false;
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {

    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("----------------------------------------------------------------");
    console.log("Date: "+date);
    console.log("Time: "+time);
    console.log("Astronaut Count: "+astronautCount);
    console.log("Crew Mass: "+crewMassKg+" kg");
    console.log("Fuel Mass: "+fuelMassKg+" kg");
    console.log("Shuttle Mass: "+shuttleMassKg+" kg");
    console.log("Total Mass: "+totalMassKg+" kg");
    console.log("Fuel Temperature: "+fuelTempCelsius+"C");
    console.log("Weather Status: "+weatherStatus);
    console.log("----------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
    console.log("Shut down the launch operations.");
}