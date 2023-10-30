function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
    paragraph.innerHTML = 'Houston! We have liftoff!';
 });

    missionAbort.addEventListener("mouseover", event =>  {
    let element = event.target;
    missionAbort.style.backgroundColor = "red";
    //element.innerHTML += "$";
    console.log("target", element);
});
    missionAbort.addEventListener("mouseout", event =>   {
    let element = event.target;
    missionAbort.style.backgroundColor = "";//#F0F0F0
    //element.innerHTML += "$";
    console.log("target", element);
});
    missionAbort.addEventListener("click", event=>{;
    let abort = confirm("Are you sure you want to abort the mission?");
    if(abort== true){
    paragraph.innerHTML="Mission aborted! Space shuttle returning home";
    }
    else{
    let url =window.location.href;
    window.open(url)
}
 });

}

window.addEventListener("load", init);
