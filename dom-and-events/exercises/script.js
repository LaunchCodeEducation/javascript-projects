function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    // button.addEventListener('click', event => {
    //     paragraph.innerHTML = 'Houston! We have liftoff!';
    //  });
    button.addEventListener("click", function(){
        paragraph.textContent="Houston, we have liftoff!";
    });
    missionAbort.addEventListener("mouseover", event => {
        missionAbort.style.background="red";
    });
    missionAbort.addEventListener("mouseleave", function(){
        missionAbort.style.background="";
    });
    missionAbort.addEventListener("click", function(){
        const abortConfirmed = window.confirm("Are you sure you want to abort the mission?");
        if(abortConfirmed){
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home."
        }
    });
}

window.addEventListener("load", init);
