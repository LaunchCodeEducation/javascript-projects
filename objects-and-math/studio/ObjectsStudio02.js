// Code your orbitCircumference function here:
function orbitCircumference(radius)
{
   return Math.floor(2*Math.PI*radius)
}

// Code your missionDuration function here:
function missionDuration(numOrbits,radius=2000,speed=28000)
{
  let number= Math.round(numOrbits * (radius/speed)*100)/100;
  console.log('The mission will travel '+radius+' km around the planet, and it will take '+number+' hours to complete.');
  return number;
}

// Copy/paste your selectRandomEntry function here:
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

function selectRandomEntry(candidate)
{
  return randomSelection(candidate);
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate,radius,speed)
{
  let numHrs = missionDuration(3,radius,speed);
  let oxyUsed = candidate.o2Used(numHrs);
  return candidate.name+' will perform the spacewalk, which will last '+numHrs+' hours and require '+oxyUsed+' kg of oxygen.';
}

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

 console.log(orbitCircumference(8));
 console.log(missionDuration(8,3000,50000));
 console.log(oxygenExpended(candidateA,9000,45000));
 