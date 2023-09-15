// Initialize Variables below

let date =	"Monday 2019-03-18";
let time =	"10:05:34 AM";
let astronautCount	= 7;
let astronautStatus	= "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg =astronautCount * averageAstronautMassKg;//564.9
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;//835407.21
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp	= -150;
let fuelLevel = "100%";//1
let weatherStatus =	"clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount >=7){
   
}

// add logic below to verify all astronauts are ready
if(astronautStatus==="ready"){
 
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg < maximumMassLimit){
    
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
}

// add logic below to verify the fuel level is at 100%
if(fuelLevel==="100%"){
}

// add logic below to verify the weather status is clear
if(weatherStatus==="clear"){
  
}
// Verify shuttle launch can proceed based on above conditions
if(astronautCount <=7 && astronautStatus =="ready" && totalMassKg <maximumMassLimit && (fuelTempCelsius >= -300 && fuelTempCelsius >= -150) 
&& fuelLevel=== "100%" && weatherStatus==="clear")
console.log("\n");
console.log("All the systems are a go! Initiating space shettle launch sequence.");
let line ="---------------------------------------------------------------------";
console.log(line);
console.log("Date: " +date);
console.log("Time: " +time);  
console.log("astronaut Count: " +astronautCount);  
console.log("crewMassKg: " +crewMassKg +" kg ");
console.log("fuelMassKg: " +fuelMassKg +" kg ");
console.log("shuttleMassKg: " +shuttleMassKg +" kg ");
console.log("totalMasskg: " +totalMassKg +" kg ");
console.log("fuelTempCelsius: " +fuelTempCelsius +" °C");
console.log("weatherStatus: " +weatherStatus);
console.log(line);
console.log("Have a safe trip astronauts!")



