let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;

/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

f) Otherwise, print "Fuel and engine status pending..." */

// Code 5a - 5f here:

if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.")

} else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%.  Engines good.")

} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines good.")

} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")

} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking'){
    console.log("ENGINE FAILURE IMMINENT!")
}




// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.

let commandOverride = true || false
if (commandOverride === false) {
    console.log("The shuttle should only launch if the fuel and engine check are OK")

} else {
    console.log("The shuttle will launch regardless of the fuel and engine status.")

}
/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */

if (fuelLevel > 20000 && engineIndicatorLight !== 'red blinking' || commandOverride ===true){
    console.log("Cleared to launch!")

} else {
    console.log("Launch scrubbed")

}