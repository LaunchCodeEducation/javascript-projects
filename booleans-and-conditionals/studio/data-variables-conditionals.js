// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg+fuelMassKg+shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount>7){
    console.log("Not Today!!")}
else{
    console.log("Blast Off!")
}
    

// add logic below to verify all astronauts are ready
if(astronautStatus === "ready"){
    console.log("yeahhhhh");}
else{
    console.log("nooooo");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit){
    console.log("goooo")}
else{
    console.log("don't do it!")
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
//if the fuelTempCelsius is no less than -300 OR no greater than -150
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
    console.log ("Get it!")
    }
else {
    console.log ("Nevermind")
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%"){
    console.log ("Good to go")
}
else {
    console.log ("No go")
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
    console.log ("Clear")
}
else {
    console.log ("weather unsafe")
}
// Verify shuttle launch can proceed based on above conditions
if(astronautCount>7){
    console.log("Not Today!!")}
else{
    if(astronautStatus != "ready"){
        console.log("nooooo");}
    else{
        if (totalMassKg > maximumMassLimit){
            console.log("don't do it!")}
        else{
            if (fuelTempCelsius < -300 && fuelTempCelsius > -150){
                console.log ("Nevermind")
                }
            else {
                if (fuelLevel != "100%"){
                    console.log ("No go")
                }
                else {
                    if (weatherStatus != "clear"){
                        console.log ("weather unsafe")
                    }
                    else{
                        console.log("All systems are a go! Initiating space sequence!");
                        console.log("-------------------------------------------------");
                        console.log("Date: "+date);
                        console.log("Time: "+time);
                        console.log("Astronaut Count: "+astronautCount);
                        console.log("Crew Mass: "+crewMassKg);
                        console.log("Fuel Mass: "+fuelMassKg);
                        console.log("Shuttle Mass: "+shuttleMassKg);
                        console.log("Total Mass: "+totalMassKg);
                        console.log("Fuel Temperature: "+fuelTempCelsius);
                        console.log("Weather Status: "+weatherStatus);
                        console.log("-------------------------------------------------");
                        console.log("See ya when I get my glasses fixed!!");
                    }
                       
                    }
                }
            }
        }
    }
