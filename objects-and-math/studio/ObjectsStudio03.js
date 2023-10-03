// Code your crewMass function here:

/*I PUT ALL THE CODE BELOW FOR SCOPE/DECLARATION REASONS I DID DO THE STUDIO :D*/

// Code your fuelRequired function here:


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
 
 let crew = [candidateB,candidateD,candidateF];
 
//Again, I will be putting all functions and code below here so they have full access to everything predeclared

function crewMass(crew) {
  const totalMass = crew.reduce((acc, member) => acc + member.mass, 0);
  return parseFloat(totalMass.toFixed(1));
}

function fuelRequired(crew, uncrewedRocketMass = 75000) {
  const crewMassTotal = crewMass(crew);
  const initialFuel = crewMassTotal * 9.5;

  let safetyMargin = 0;
  for (const member of crew) {
    if (member.species === 'dog' || member.species === 'cat') {
      safetyMargin += 200;
    } else {
      safetyMargin += 100;
    }
  }

  const totalFuelRequired = Math.ceil(initialFuel + safetyMargin);

  return {
    totalLaunchMass: crewMassTotal + uncrewedRocketMass,
    totalFuelRequired,
  };
}

// Example usage with the existing 'crew' array
const selectedCrew = [candidateA, candidateC, candidateE]; 

const launchInfo = fuelRequired(selectedCrew);

console.log(`The mission has a launch mass of ${launchInfo.totalLaunchMass} kg and requires ${launchInfo.totalFuelRequired} kg of fuel.`);
