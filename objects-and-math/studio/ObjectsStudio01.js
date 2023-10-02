// Code your selectRandomEntry function here:
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

function selectRandomEntry(candidate)
{
  return randomSelection(candidate);
}

// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];

let numEnts = 0;
let numArr=[];

while(numEnts < 3){
  let idNumVar = selectRandomEntry(idNumbers);
  if(!numArr.includes(idNumVar))
  {
  numArr.push(idNumVar);
  numEnts ++;
  }
}
console.log(numArr);

function buildCrewArray(idNum,candidate)
{
  let numCands = 0;
  let canArr=[];
  while(numCands < 3){
    let idCanVar = selectRandomEntry(candidate);
    if(!canArr.includes(idCanVar))
    {
      canArr.push(idCanVar);
      numCands ++;
    }
  }
  return `${canArr[0].name}` + ', '+`${canArr[1].name}`+', and '+`${canArr[2].name}`+' are going to space!';
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

console.log(buildCrewArray(numArr,animals));

// Code your template literal and console.log statements:
