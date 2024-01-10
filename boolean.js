// Question 1 of Exercise //
let engineIndicatorLight = 'red blinking';
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
// Question 2 of Exercise used the assignment opperators to define values // 
if (engineIndicatorLight === 'green') {
    console.log("enginesHaveStarted");
}else if (engineIndicatorLight === 'green blinking') {
    console.log("eninge are preparing to start")
}else {
    console.log('engines are off')
}
// Qustion 3, lets write some saftey rules!!! Given conditions from exersice if the crew is ready//
if (crewStatus = 'true'){
    console.log('Crew Ready');
} else {
    console.log('crew not ready');
}
// Conditions based on the computer status given the end users endput // 
if (computerStatusCode = 200) {
    console.log('"please stand by. Computer is rebooting"');
} else if (computerStatusCode = 400){
    console.log('"Success! Computer online."');
} else {
    console.log('"Computer offline"');
}
// Computer Status update for end user depending on conditions met // 
if (shuttleSpeed > 17500) {
    console.log('"ALERT: Escape velocity reached!"');
} else if (shuttleSpeed < 8000) {
    console.log('"ALERT: Cannot maintain orbit!"');
} else {
    console.log('"Stable speed"');
}
// Question 4 Predictions of defined code //
    // First one is compared to the second line of code written bellow //
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn){
    console.log('"All Systems Go!!!"');
}else {
    console.log('"WARNING. Not ready"');
}
// Second version of code written with the comparison opperators //
if (!crewStatus || computerStatusCode !==200 || !spaceSuitsOn){
    console.log('"WARNING. Not ready"');
}else {
    console.log('"All Systems Go!!!"');
}
// As we can see they do produce the same result, while it seems that using the operators are more effecient // 
// Now lets create a full status update for the crew when needed to monitor fule consumption. // 
let fuelLevel = 21000;
let engineTemperature = 1200;
// enginIndicatorLight is already defined above//
//a//
if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log('"Full tank. Engines good."');
}else if (fuelLevel > 10000 && engineTemperature <=2500) {
    console.log('"Fuel level above 50 percent. Engines good."');
}else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log('"Check fuel level. Engines running hot!"');
}else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
    console.log('"ENGINE FAILURE INMMINENT!"');
}else {
    console.log('"Fuel and engine status pending..."');
}
let commandOverride = true;
if (commandOverride = false) {
    console.log('"Delay Launch to confirm Safety protocal"');
}else {
    console.log('"Launch YOLO, things may not work but lets go!!!"');
}
