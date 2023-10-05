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

const printAll = require('./display.js');



