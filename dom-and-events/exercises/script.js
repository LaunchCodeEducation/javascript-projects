function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     missionAbort.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "red";
     });
     missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });
}
window.addEventListener("load", init);

    console.log(window);
    window.alert("Are you sure you want to abort the mission?")
    let response = window.confirm("Mission aborted! Space shuttle returning home");
    console.log(response);


    


