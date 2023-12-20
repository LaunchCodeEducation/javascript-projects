const nameOfShuttle = "determination";
const shuttleSpeed = 17500;
const marsDis = 225000000;
const moonDis = 38400;
const mpkh = .621;
console.log(typeof(nameOfShuttle))
console.log(typeof(shuttleSpeed))
console.log(typeof(marsDis))
console.log(typeof(moonDis))
console.log(typeof(mpkh))

let mTM = marDis * mpkh; // Calculation for Miles to Mars mTM //
let hTM = mTM / shuttleSpeed; // Calculation for Hours to Mars //
let dTM = hTM / 24;