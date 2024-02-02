// Code your orbitCircumference function here:
function getCircumference(radius){
  return Math.round(2*Math.PI*radius);
}

// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitSpeed = 28000){
  let circumference = getCircumference(orbitRadius);
  let distance = orbitsCompleted * circumference;
  let time = Math.round((distance / orbitSpeed) * 100) / 100;
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(numbers){
  return numbers[Math.floor(Math.random()*numbers.length)];
}
// Code your oxygenExpended function here:
function oxygenExpended(candidate, numOfOrbits, rad, spd){
  let hoursTaken = missionDuration(numOfOrbits, rad, spd);
  let oxygenConsumed = candidate.o2Used(hoursTaken);
  return `${candidate.name} will perform the spacewalk, which will last ${hoursTaken} hours and require ${oxygenConsumed} kg of oxygen.`;
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
 
let crew = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

let sortedNumArra = crew.toSorted((cand1, cand2) => {
  return cand2.o2Used(1) - cand1.o2Used(1);
});
 // Example usage:
let numOfOrbits = 3;
let rad = 2000;
let spd = 28000;

let timeTaken = missionDuration(numOfOrbits, rad, spd);

console.log(`The mission will travel ${getCircumference(rad)} km around the planet, and it will take ${timeTaken} hours to complete.`);
//Using Random selected candidate
console.log(oxygenExpended(selectRandomEntry(crew), numOfOrbits, rad, spd));
//BONUS: Using least Oxygen Used candidate
console.log(oxygenExpended(sortedNumArra[0], numOfOrbits, rad, spd));