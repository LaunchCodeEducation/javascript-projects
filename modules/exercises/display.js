//TODO: Export ONLY the printAll function.

function printAll(names, tests, scores){
  let header = 'Name';
  let row = '';

  for (let i = 0; i<tests.length; i++){
    header += '\t'+tests[i];
  }
  console.log(header);

  for (let name = 0; name<names.length; name++){
    row = names[name];
    for (let score = 0; score<scores[name].length;score++){
      row += '\t'+scores[name][score];
    }
    console.log(row);
  }
  return;
}

function printStudentScores(index,students,tests,scores){
  console.log(`Test results for ${students[index]}:`);
  for (let i = 0; i<tests.length; i++){
    console.log(`${tests[i]} = ${scores[index][i]}%.`);
  }
  return;
}

function printTestScores(index,test,students,scores){
  console.log(`Class results for ${test} test:`);
  for (let i = 0; i<students.length; i++){
    console.log(`${students[i]} = ${scores[i][index]}%.`);
  }
  return;
}
