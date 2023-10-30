// Write your JavaScript code here.
// Remember to pay attention to page loading!
function studio(){
    const abortMission= document.getElementById("missionAbort");
    const liftOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight =document.getElementById("spaceShuttleHeight");

    liftOff.addEventListener("click", event=>{
        let takeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeoff== true){
        flightStatus.innerHTML="Shuttle in flight.";
        shuttleBackground.style.backgroundColor ="blue";
        shuttleHeight.innerHTML=10000;
        }
        else{
        let url =window.location.href;
        window.open(url)
    }
 });

}
window.addEventListener("load", studio);