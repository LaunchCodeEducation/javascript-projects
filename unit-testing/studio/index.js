
let launchcode = {
  organization : "nonprofit",
  executiveDirector : "Jeff",
  percentageCoolEmployees : 100,
  programsOffered : [
    "LC101",
    "LaunchCode Women+",
    "CodeCamp"
  ],
  launchOutput : function launchOutput(num){
    if(num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0) {
        return "Launch!";
    }else if(num % 2 !== 0 && num % 3 === 0 && num % 5 !== 0){
        return "Code!";
    } else if(num % 2 !== 0 && num % 3 !== 0 && num % 5 === 0){
        return "Rocks!";
    } else if(num % 2 === 0 && num % 3 === 0 && num % 5 !== 0){
        return "LaunchCode!";
    } else if(num % 2 !== 0 && num % 3 === 0 && num % 5 === 0){
        return "Code Rocks!"
    } else if(num % 2 === 0 && num % 3 !== 0 && num % 5 === 0){
        return "Launch Rocks!";
    } else if(num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
        
    }
  }
}

module.exports = launchcode;
