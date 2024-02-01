// Code your selectRandomEntry function here:
// Select a random number using this function to select random numbers//
// Code your buildCrewArray function here:
function selectRandomEntry(randomIdNumbers){
  let randomNumber = Math.floor(Math.random()*randomIdNumbers.length);
  return idNumbers[randomNumber];
}
let idNumbers = [291, 414, 503, 599, 796, 890];

for(i=0; i<idNumbers.length;i++){
  console.log(selectRandomEntry(idNumbers));
}

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

// Code your template literal and console.log statements:
function buildCrew(animalArr){
const randomCrew = Math.floor(Math.random()*animals.length);
return animalArr[randomCrew];
}
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

for(i=0;i<3;i++){
  console.log(`Selection ${i + 1}: ${buildCrew(animals).name}`);
}