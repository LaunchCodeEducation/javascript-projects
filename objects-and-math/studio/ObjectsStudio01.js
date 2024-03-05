let idNumbers = [291, 414, 503, 599, 796, 890];

function randomSelection(arr)
{
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

function randomUniqueNum(outputCount)
 {
   let result = [];
   while(result.length !== outputCount)
   {
      let random =randomSelection(idNumbers);
      if (result.length===0)
        result.push(random);
      else
        if (!result.includes(random))
          result.push(random);
   }
   return result;
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

// Code your buildCrewArray function here:
function buildCrewArray(luckyID, candidateObjects)
{
  let crewArray = [];
  for(let j=0;j<candidateObjects.length;j++)  
  { 
      if (luckyID.includes(candidateObjects[j].astronautID))
      {
        crewArray.push(candidateObjects[j]);
      }
  }
 return crewArray;
}
let randomSelectedID = randomUniqueNum(3);

let finalCrewToSpace = buildCrewArray(randomSelectedID, animals);

// Code your template literal and console.log statements:

console.log (`${finalCrewToSpace[0].name} , ${finalCrewToSpace[1].name}, and ${finalCrewToSpace[2].name} are going to space`);
