function init () {
    const missionAbort = document.getElementById("abortMission");
    missionAbort.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "red";
   })
    missionAbort.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightblue";
    })
    missionAbort.addEventListener("click", event => {
        window.alert("Are you sure you want to abort the mission?")
        paragraph.innerHTML = "Mission aborted! Damn! Space shuttle returning home..."
    })

    const button = document.getElementById("liftoffButton");
    button.addEventListener("click", event => {
        paragraph.innerHTML = "Houston! We have liftoff!";

    })
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
}

window.addEventListener("load", init)
   


