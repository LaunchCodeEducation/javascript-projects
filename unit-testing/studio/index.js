
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
launchOutput(number){

if(number % 2 === 0 && number %  3 === 0){
    return 'Launchcode!';
}
if(number % 2 === 0 && number %  5 === 0){
    return 'Launch Rocks! (CRASH!!!!)';
}
if(number % 2 === 0){
    return 'Launch!';
}
if(number % 3 === 0){
    return 'Code!';
}
if(number % 5 === 0){
    return 'Rocks!';
}

return 'nadaaaa'

}
}

console.log(launchcode.launchOutput(10))
module.exports = launchcode;

