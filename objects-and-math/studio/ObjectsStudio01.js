// Code your selectRandomEntry function here:


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index]
}


// Code your buildCrewArray function here:
function buildCrewArray(idArray, numOfCrew){
  let selectedIDs = [];
  while (selectedIDs.length < numOfCrew) {
    let randomID = selectRandomEntry(idArray);
  if (!selectedIDs.includes(randomID)){
    selectedIDs.push(randomID);
  }
}

let crew = animals.filter(candidate => selectedIDs.includes(candidate.astronautID));
return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let crewArray = buildCrewArray(idNumbers, 3);

crewArray.forEach(member => {
  console.log(`${member.name} is a ${member.species}. Their mass is ${member.mass}, and their ID is ${member.astronautID}. They use ${member.o2Used(5).toFixed(3)} liters of oxygen in 5 hours.`);
});