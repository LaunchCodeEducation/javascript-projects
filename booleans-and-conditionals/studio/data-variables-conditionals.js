// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "clear"
let preparedForLiftOff = true

console.log(`Today is ${date}. The time is ${time}.`);
console.log(" ");

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count does not exceed 7!");
} else {
    console.log("Astronaut count exceeds 7!");
}

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts are ready for liftoff!");
} else {
    console.log("Astronauts are not prepared for liftoff!");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    console.log("Weight limit exceeded!");
} else {
    console.log("Within safe weight capacities.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -150 && fuelTempCelsius <= -300) {
    console.log("Fuel temp is within appropriate ranges of -150 and -300.");
} else {
    console.log("Fuel temp is exceeding safe temperature ranges.");
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel is at 100% capacity.");
} else {
    console.log("Fuel temp is not at 100%");
}

// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log(`Weather is ${weatherStatus}!`);
} else {
    console.log(`Weather status unknown.`);
}

// Verify shuttle launch can proceed based on above conditions
if (astronautCount === 7 && astronautStatus === "ready" && fuelTempCelsius >= -150 && fuelTempCelsius <= -300 && fuelLevel === "100%" && weatherStatus === "clear") {
    console.log("Ready for takeoff!");
} else {
    console.log("Unable to Launch. Please resolve outstanding launch issues.");
}
