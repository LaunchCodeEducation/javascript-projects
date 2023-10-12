function gradeLabs(labs) {
  try{
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result = lab.runLab(3);
    let student = lab.student;
    console.log(`${student} code worked: ${result === 27}`);
  }
  }
  catch(err)
  {
    console.log("Error thrown"); 
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);