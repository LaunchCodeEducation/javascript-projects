// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 6;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
if (astronautCount > 7) {
    console.log("Too many Astronauts");
    preparedForLiftOff = false;
}
if (astronautStatus != "ready") {
    console.log("Astronaut Status NOT Ready");
    preparedForLiftOff = false;
}
if (totalMassKg > maximumMassLimit) {
    console.log("Too much weight");
    preparedForLiftOff = false;
}
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    console.log("Temp outside acceptable limit");
    preparedForLiftOff = false;
}
if (fuelLevel != "100%") {
    console.log("Circle back to the gas station");
    preparedForLiftOff = false;
}
if (weatherStatus != "clear") {
    console.log("I can't see");
    preparedForLiftOff = false;
}
if (!preparedForLiftOff) {
    console.log("Not prepared for lift off");
} else {
    console.log("All systems are a go, initiating launch sequence.");
    console.log(divider);
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass " + crewMassKg + "kg");
    console.log("Fuel Mass " + fuelMassKg + "kg");
    console.log("Shuttle Mass " + shuttleMassKg + "kg");
    console.log("Total Mass " + totalMassKg + "kg");
    console.log("Fuel Temperature " + fuelTempCelsius + "°");
    console.log("Weather Status " + weatherStatus);
    console.log(divider);
    console.log("Have a safe trip astronauts!");
    }