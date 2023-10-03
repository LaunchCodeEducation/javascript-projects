let crew = [candidateB,candidateD,candidateF];

function selectByOxygenUse(arr) {
  let candidate = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].o2Used(1) < candidate.o2Used(1)) {
      candidate = arr[i];
    }
  }
  return candidate;
}


let selectedCandidateBonus = selectByOxygenUse(crew);
console.log(oxygenExpended(selectedCandidateBonus));


// Code your crewMass function here:
function crewMass(arr) {
  let mass = 0
  for (let i = 0; i < arr.length; i++) {
    mass += arr[i].mass;
  }
  return Math.round(mass * 10) / 10;
} 

const ROCKET_MASS = 75000;

function getTotalMass(arr) {
  return crewMass(arr) + ROCKET_MASS;
}
// Code your fuelRequired function here:
function fuelRequired(arr) {
  return getTotalMass(arr) * 9.5;

}
function safetySurplus(arr) {
  let surplus = 100 * arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].species === "cat" || arr[i].species === "dog") {
      surplus += 100;
    }
  }
  return surplus
}
console.log(`The mission has a launch mass of ${getTotalMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.`);
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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
 
 