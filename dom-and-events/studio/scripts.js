// Write your JavaScript code here.
window.addEventListener('load', function(){
    let takeOff = document.getElementById("takeoff");
    let background = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let land = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let rocket = document.getElementById('rocket');
    rocket.style.position= 'absolute'; 
    rocket.style.left = '0px'; 
    rocket.style.bottom = '0px';
    let right = this.document.getElementById('right');
    let left = this.document.getElementById('left');
    let down = this.document.getElementById('down');
    let up = document.getElementById('up');

    takeOff.addEventListener('click', function(event){
        result = window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (result){
            background.style.backgroundColor = 'blue'
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleHeight.innerHTML = "10000"
        }
    });

    land.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear is engaged.");
        background.style.backgroundColor = "green";
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleHeight.innerHTML = "0"
    });

    missionAbort.addEventListener("click", function(event){
        result = window.confirm("Confirm that you want to abort the mission.");
        if (result){
            flightStatus.innerHTML = "Mission aborted.";
            background.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = "0";  
        }
    });

    right.addEventListener("click", function () {
        movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;
    });

    left.addEventListener("click", function () {
        movement = parseInt(rocket.style.left) - 10 +'px';
        rocket.style.left = movement;
    });

    down.addEventListener("click", function () {
        movement = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    });

    up.addEventListener("click", function () {
        movement = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });
});

// Remember to pay attention to page loading!
