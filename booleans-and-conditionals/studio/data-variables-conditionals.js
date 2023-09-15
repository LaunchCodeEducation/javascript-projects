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
let fuelLevel = 100
let weatherStatus = "clear"
let preparedForLiftOff = true


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log("Astronaut is ready");
} else{
    console.log("Astronaut count is incorrect")
}
// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < 850000){
} else{
    console.log("mass is normal")}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
} else{
    console.log("fuel temp is unsafe")
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel == 100){
} else{
    console.log("Fuel is ready!")
}
// add logic below to verify the weather status is clear
if (weatherStatus == "clear"){
} else{
    console.log("Good to go!")
}
// Verify shuttle launch can proceed based on above conditions
