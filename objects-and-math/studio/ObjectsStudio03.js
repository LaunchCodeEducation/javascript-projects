// Code your crewMass function here:
function crewMass(selectedCrew){
  let totalcrewMass = selectedCrew.reduce((acc, candidate) => {
    return acc + candidate.mass;
  }, 0);
  return totalcrewMass;
}

// Code your fuelRequired function here:
function fuelRequired(unCrewedMass, selectedCrewMass, crew){
  crew.forEach(element => {
    if(element.species === 'cat' || element.species === 'dog'){
      selectedCrewMass = selectedCrewMass + 200;
      console.log('selectedCrewMAss updated: '+ selectedCrewMass);
    }
  });
  let totalFuelReq = ( unCrewedMass + selectedCrewMass ) * 9.5;
  return `The mission has a launch mass of ${unCrewedMass + selectedCrewMass} kg and requires ${Math.round(totalFuelReq)} kg of fuel. `;
}

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
 

 console.log('Total sum of mass of crew members is: '+crewMass(crew));
 console.log(fuelRequired(75000, crewMass(crew), crew));
