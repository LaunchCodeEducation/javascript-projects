// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "green"; //"red blinking"
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 18000;
let engineTempature = 2500;

// BEFORE running the code, predict what will be printed to the console by the following statements:
console.log("test");
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if(crewStatus == true){
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

if(computerStatusCode === 200){
   console.log("Please stand by. Computer is rebooting.");
} else if(computerStatusCode === 400) {
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline!");
}

if(shuttleSpeed > 17500){
   console.log("ALERT: Escape velocity reached!");
} else if( shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("ALERT: Stable Speed");
}


if (engineTempature > 3500 || fuelLevel <= 1000 || engineIndicatorLight ===  "red blinking"){
   console.log("ENGINE FAILURE IMMINENT!");
} else if (engineTempature <= 2500){
   if(fuelLevel > 20000){
      console.log("Full tank. Engines good!");
   } else if (fuelLevel > 10000){
      console.log("Fuel level above 50%. Engines good.");
   } else if (fuelLevel > 5000){
      console.log("Fuel level above 25%. Engines good.");
   } else if (fuelLevel <= 5000 || engineTempature > 2500){
    console.log("Check fuel level. Engines running hot.");
   } else{
     console.log("Fuel and engine status pending");
   }
}

let commandOverride = false;
if (commandOverride || (fuelLevel > 20000 && engineIndicatorLight !="red blinking")){
   console.log("Cleared to launch");
} else{
   console.log("Launched Scrubbed!");
}
