let person1 = {
    name: 'Zack',
    lastName: 'Cain',
    age: 28,
    background: 'PM',
    salary: 89000,
}

let person2 = {
    name: 'Bob',
    lastName: 'Smith',
    age: 38,
    background: "IT",
    salary: 95000,
}

let person3 = {
    name: 'Sally',
    lastName: 'Jones',
    age:39,
    background: 'HR',
    salary: 120000,
}


function calcSalaryAvg(){
const workForce = [person1,person2,person3];
let totalSalary = 0;

for(i=0,i<workForce.length;i++){
totalSalary += workForce[i].salary;
}
let averageSalary = totalSalary/workForce.length;
console.log(`The average Salary for the company is ${averageSalary}`);
}
calcSallaryAvg();