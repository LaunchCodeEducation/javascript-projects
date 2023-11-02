let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 22000;
let engineTemperature = 2500;

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }

// 3) Write conditional expressions to satisfy the following safety rules:
if (crewStatus) {
    console.log("Crew Ready");
} else {
    console.log("Crea Not Ready");
}
// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".


// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
    } else if (computerStatusCode === 400) {
        console.log("Success! Computer Online.");
    } else {
        console.log("Alert: Computer offline");
    }

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
  } else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
  } else {
    console.log("Stable speed.");
  }

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }

 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }
console.log("yes");

if (fuelLevel < 21000 || engineTemperature > 1200 || engineIndicatorLight === "Not red blinking"){
    console.log("Full tank. Engines are good!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }

 let commnadOverride = true;

 if (fuelLevel > 20000 && engineIndicatorLight != "red blinking" || commnadOverride == true){
    console.log("Cleared to Launch");
 }  else {
    console.log("Launch Scrubbed!");
 }
  