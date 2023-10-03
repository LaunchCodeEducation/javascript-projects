// Code your buildCrewArray function here:

/*I PUT ALL THE CODE BELOW FOR SCOPE/DECLARATION REASONS I DID DO THE STUDIO :D*/



let idNumbers = [291, 414, 503, 599, 796, 890];

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

function selectRandomEntry() {
  const selectedIDs = [];

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * idNumbers.length);
    const selectedID = idNumbers[randomIndex];
    selectedIDs.push(selectedID);
    idNumbers.splice(randomIndex, 1);
  }

  return selectedIDs;
}

const luckyIDs = selectRandomEntry();
console.log(luckyIDs);

function buildCrewArray(selectedIDs, candidates) {
  const crew = [];

  for (const luckyID of selectedIDs) {
    for (const candidate of candidates) {
      if (candidate.astronautID === luckyID) {
        crew.push(candidate);
        break;
      }
    }
  }

  return crew;
}

const crew = buildCrewArray(luckyIDs, animals);

// Print the names of the selected animals using a template literal
const selectedAnimalNames = crew.map((animal) => animal.name).join(', ');
console.log(`${selectedAnimalNames} are going to space!`);
