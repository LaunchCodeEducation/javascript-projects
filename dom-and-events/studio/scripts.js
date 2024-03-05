// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init (){
    var takeoffButton = document.getElementById('takeoff');
    var landingButton = document.getElementById('landing');
    var abortButton = document.getElementById('missionAbort');
    var upButton = document.getElementById('up');
    var downButton = document.getElementById('down');
    var rightButton = document.getElementById('right');
    var leftButton = document.getElementById('left');
    var flightStatus = document.getElementById("flightStatus");
    var shuttleBackground = document.getElementById("shuttleBackground");
    var spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    var shuttleBackground = document.getElementById("shuttleBackground");
    var rocket = document.getElementById("rocket");

    const shuttleBackgroundWidth = shuttleBackground.offsetWidth;

    let shuttleImgTop = 245;
    let shuttleImgLeft = shuttleBackgroundWidth / 2;
    let shuttleHeight = 0;

    rocket.style.position = "absolute";
    rocket.style.top = shuttleImgTop + "px";
    rocket.style.left = shuttleImgLeft + "px";

    // calculations for bonus mission part 1
    const shuttleBackgroundHeight = shuttleBackground.offsetHeight;
    const shuttleBackgroundWidth1 = shuttleBackground.offsetWidth;
    const rocketHeight = rocket.offsetHeight;
    const rocketWidth = rocket.offsetWidth;
    const availableSpaceHeight = shuttleBackgroundHeight - rocketHeight;
    const availableSpaceWidth = shuttleBackgroundWidth1 - rocketWidth;

    takeoffButton.addEventListener('click', function() {
        var confirmWindow  = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirmWindow){
            flightStatus.innerHTML="Shuttle in flight.";
            shuttleBackground.style.backgroundColor="blue";
            shuttleHeight = 10000;
            spaceShuttleHeight.innerHTML = shuttleHeight;
        }
    });

    landingButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML="The shuttle has landed.";
        shuttleBackground.style.backgroundColor="green";
        shuttleHeight = 0;
        spaceShuttleHeight.innerHTML = shuttleHeight;
        
        
    });

    abortButton.addEventListener("click", () => {
        var confirmWindow  = window.confirm("Confirm that you want to abort the mission.");
        if (confirmWindow) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight = 0;
            spaceShuttleHeight.innerHTML = shuttleHeight;
           
        }
      });

    abortButton.addEventListener("click", function(){
        var confirmWindow  = window.confirm("Confirm that you want to abort the mission.");
        if(confirmWindow){
            flightStatus.innerHTML="Mission aborted.";
            shuttleBackground.style.backgroundColor="green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });  

    leftButton.addEventListener("click", () => {
        console.log(parseInt(rocket.style.left.slice(0,-2))-10);
        if ((parseInt(rocket.style.left.slice(0,-2))-10)>0)
        {
        shuttleImgLeft -= 10;
        
          rocket.style.left = shuttleImgLeft + "px";
        }
      });

      rightButton.addEventListener("click", () => {
        
        if ((parseInt(rocket.style.left.slice(0,-2))+10)<availableSpaceWidth)
        {
        shuttleImgLeft += 10;
       
        rocket.style.left = shuttleImgLeft + "px";
        }
        
      });

 
      upButton.addEventListener("click", () => {
    
        if ((parseInt(rocket.style.top.slice(0,-2))+10)>0){
       
        //shuttleImgTop += 10;
        shuttleImgTop -= 10;
        
          //rocket.style.bottom = shuttleImgTop + "px";
          rocket.style.top = shuttleImgTop + "px";
          shuttleHeight += 10000;
          spaceShuttleHeight.innerHTML = shuttleHeight;
        }
        
      });      

      downButton.addEventListener("click", () => {
        if ((parseInt(rocket.style.top.slice(0,-2))+10)<availableSpaceHeight){
        shuttleImgTop += 10;
       
        rocket.style.top = shuttleImgTop + "px";
          shuttleHeight -= 10000;
          spaceShuttleHeight.innerHTML = shuttleHeight;
        }
      });
}
window.addEventListener("load", init);
