let engineIndicatorLight = redBlinking;
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
// used the assignment opperators to define values // 
if (engineIndicatorLight === "green") {
    console.log("enginesHaveStarted");
} else if (engineIndicatorLight === "green blinking"){
    console.log("eninge are preparing to start");
}else {
    console.log('engines are off');
}
// given conditions from exersice//
if crewStatus = true; {
    console.log('Crew Ready');
} else {
    console.log('crew not ready');
}
if computerStatusCode = 200;{
    console.log('"please stand by. Computer is rebooting"');
} else if (computerStatusCode = 400){
    console.log('"Success! Computer online."');
} else {
    console.log('"Computer offline"');
}

