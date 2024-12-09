// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const background = document.getElementById("shuttleBackground");
    const button = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket")


    button.addEventListener("click", () => {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirm){
             flightStatus.innerHTML = "Shuttle in flight.";
             background.style.backgroundColor = "blue";
             let currentHeight = parseInt(shuttleHeight.innerHTML);
             shuttleHeight.innerHTML = currentHeight + 10000
        }
         })
         landing.addEventListener("click", () => {
             window.alert("The shuttle is landing. Landing gear engaged.");
             flightStatus.innerHTML = "The shuttle has landed.";
             background.style.backgroundColor = "green"
             shuttleHeight.innerHTML = 0
             rocket.style.left = "0px";
             rocket.style.bottom = "0px" ;
     
         })
         missionAbort.addEventListener("click", () => {
             let confirm = window.confirm( "Confirm that you want to abort the mission.");
             if (confirm){
                 flightStatus.innerHTML = "Mission aborted.";
                 background.style.backgroundColor = "green"
                 shuttleHeight.innerHTML = 0
                 rocket.style.left = "0px";
                 rocket.style.bottom = "0px" ;
         
             }
      
         })
     
         rocket.style.position = "absolute";
         rocket.style.left = "0px";
         rocket.style.bottom = "0px" ;
         
         
         up.addEventListener("click", () => {
             let currentBottom = parseInt(rocket.style.bottom);
             rocket.style.bottom = (currentBottom + 10) + "px";
             shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
         })
         down.addEventListener("click", () => {
             let currentBottom = parseInt(rocket.style.bottom);
             rocket.style.bottom = (currentBottom - 10) + "px";
             shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
         })
         left.addEventListener("click", () => {
             let currentBottom = parseInt(rocket.style.left);
             rocket.style.left = (currentBottom - 10) + "px";
         })
         right.addEventListener("click", () => {
             let currentLeft = parseInt(rocket.style.left);
             rocket.style.left = (currentLeft + 10) + "px";
         })
}

window.addEventListener("load", init);
