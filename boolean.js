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

