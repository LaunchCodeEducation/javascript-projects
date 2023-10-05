//User interface:
let prompts = ['display all scores', 'average the scores for each test', 'average the scores for each astronaut','select the next spacewalker'];

for (let i = 0; i<prompts.length; i++){
  let response = input.question(`Would you like to ${prompts[i]}? Y/N: `);
  if (response.toLowerCase()==='y'){
    if (i===0){
      //Call 'printAll' here and pass in all necessary arguments.
    } else if (i===1){
      for (let j = 0; j<testTitles.length; j++){
        let avg = //Call 'averageForTest' here. Pass in j and scores as arguments.
        console.log(`${testTitles[j]} test average = ${avg}%.`);
      }
    } else if (i===2){
      for (let j = 0; j<astronauts.length; j++){
        let avg = //Call 'averageForStudent' here. Pass in j and scores as arguments.
        console.log(`${astronauts[j]}'s test average = ${avg}%.`);
      }
    } else {
      let walker = //Call 'randomSelect' to pick a spacewalker from the astronauts array.
      console.log(`${walker} is the next spacewalker.`);
    }
  } else {
    console.log("Option skipped.");
  }
}

printAll(astronauts, testTitles, scores); 

let avg = averages.averageForStudent(j, scores);
