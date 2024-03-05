// Code your orbitCircumference function here:
let circumference = function (radius)
{
  return Math.round(2*Math.PI*radius);
};

// Code your missionDuration function here:

function missionDuration(noOfOrbitsCompleted, orbitRadius = 2000, orbitSpeed = 28000)
{
  let duration=0;
  let distance =noOfOrbitsCompleted*circumference(orbitRadius);
  duration =Math.round(distance/orbitSpeed*100)/100;
  //console.log(`The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.`);
  return duration;
}

// Copy/paste your selectRandomEntry function here:

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 function randomSelection(arr)
 {
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }

//  // Code your oxygenExpended function here:
function oxygenExpended(candiateObj)
{
  let noOFOrbits=3;
  let duration = missionDuration(noOFOrbits);
  //let duration = missionDuration(noOFOrbits, 1500, 25000);
  let oxygenused = Math.round(candiateObj.o2Used(duration)*1000)/1000;
  //console.log(`${candiateObj.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenused} kg of oxygen.`);
  return oxygenused;
}

randomCandidate = randomSelection(crew);
//console.log(oxygenExpended(randomCandidate));

//bonus mission
let oxyArr = [];
for(let i=0;i<crew.length;i++)
{
  oxyArr.push(oxygenExpended(crew[i]));
}

console.log(oxyArr);
console.log(crew[0].name);
console.log(crew[1].name);
console.log(crew[2].name);

function minNumberInArray (arr)
{
    let minValue=arr[0];
    for (let item of arr)   
    {
        if (item<minValue)
        {
            minValue=item;
        }
    }
    return minValue;
}

//console.log(minNumberInArray(oxyArr));

let minoxyAnimal = crew[oxyArr.indexOf(minNumberInArray(oxyArr))];
console.log(`${minoxyAnimal.name} will perform the spacewalk, with least consumption of oxygen`);