// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus	= "ready";
let averageAstronautMassKg = "80.7";
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	 = -225;
let minimumFuelTemp	 = -300;
let maximumFuelTemp	= -150;
let fuelLevel = 1.00;
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
/* if astronautCount is no greater than 7
if astronautStatus is ready
if the totalMassKg is less than the maximumMassLimit of 850000
if the fuelTempCelsius is no less than -300 OR no greater than -150
if fuelLevel is at 100%
if weatherStatus is clear*/

// add logic below to verify all astronauts are ready
if (astronautCount <= 7){
    preparedForLiftOff = true;
} else{
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <850000){
    preparedForLiftOff = true;
} else{
    preparedForLiftOff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < maximumFuelTemp && fuelTempCelsius > minimumFuelTemp){
    preparedForLiftOff = true;
} else{
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === 1.00){
    preparedForLiftOff = true;
} else{
    preparedForLiftOff = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
    preparedForLiftOff = true;
} else{
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff){
    console.log("All systems are a go! Intitating space shuttle launch sequence");
    console.log("--------------------------------------------------------------");
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount + " kg");
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + "°C");
    console.log("Weather Status: " + weatherStatus);
    console.log("--------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
    console.log ("The launch has been scrubbed.")
}