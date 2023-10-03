// Code your orbitCircumference function here:

/*I PUT ALL THE CODE BELOW FOR SCOPE/DECLARATION REASONS I DID DO THE STUDIO :D*/

// Code your missionDuration function here:


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


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


 //I'm putting the functions and studio code down here for object and variable access purposes
function orbitCircumference(radius) {
  const circumference = Math.round(2 * Math.PI * radius);
  return circumference;
}

function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) {
  const distance = orbitCircumference(orbitRadius) * orbitsCompleted;
  const timeHours = distance / orbitalSpeed;
  const roundedTime = timeHours.toFixed(2);
  return parseFloat(roundedTime);
}

// Example usage
const orbitsCompleted = 5;
const orbitRadius = 2000; // Default value
const orbitalSpeed = 28000; // Default value

const circumference = orbitCircumference(orbitRadius);
const duration = missionDuration(orbitsCompleted, orbitRadius, orbitalSpeed);

console.log(`The mission will travel ${circumference} km around the planet, and it will take ${duration} hours to complete.`);

function oxygenExpended(candidate, orbitalRadius, orbitalSpeed) {
  const spacewalkTime = missionDuration(3, orbitalRadius, orbitalSpeed);
  const oxygenConsumed = candidate.o2Used(spacewalkTime);
  const formattedOxygen = oxygenConsumed.toFixed(3);

  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${formattedOxygen} kg of oxygen.`;
}

const customOrbitalRadius = 2200;
const customOrbitalSpeed = 27000;

const testAnimalA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs; },
  'astronautID': 414
};

const oxygenUsageMessage = oxygenExpended(testAnimalA, customOrbitalRadius, customOrbitalSpeed);
console.log(oxygenUsageMessage);
