let person1 = {
    name: 'Zack',
    lastName: 'Cain',
    age: 28,
    background: 'PM',
    Sallary: 89000,
}

let person2 = {
    name: 'Bob',
    lastName: 'Smith',
    age: 38,
    background: "IT",
    Sallary: 95000,
}

let person3 = {
    name: 'Sally',
    lastName: 'Jones',
    age:39,
    background: 'HR',
    Sallary: 120000,
}


function calcSallaryAvg(sallary){
    let totalSallary = 0;
for(i=0,i<workForce.length;i++){
totalSallary += workForce[i].Sallary;
}
const workForce = [person1,person2,person3];
const sallary = totalSallary/workForce.length
console.log(`The average Salary for the company is ${sallary}`)
}
