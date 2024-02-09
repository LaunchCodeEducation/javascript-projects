

let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(number) {
        let no = 0;
        no = number;
       
        if (no%2===0 || no%3===0 || no%5===0)
        {
            if (no%2===0 && no%3===0 && no%5===0)
                return 'LaunchCode Rocks!';
            else if (no%3===0 && no%5===0)
                return 'Code Rocks!';
            else if (no%2===0 && no%3===0)
                return 'LaunchCode!';
            else if (no%2===0 && no%5===0)
                return 'Launch Rocks!';
            else if (no%3===0)
                return 'Code!';
            else if (no%2===0)
                return 'Launch!';   
            else if (no%5===0)
                return 'Rocks!';
        }   
        else 
            return 'Rutabagas! That doesnt work.';
    }
}

function temp(number)
{
    let returnStrings = {
    2 : "Launch!",
    3 : "Code!",
    5 : "Rocks!"
    }
    
    let outputString = '';
    let numArr = [];
    for(key in returnStrings)
    {
        if (number % key == 0)
        {
            numArr.push(Number(key));
            outputString += returnStrings[key];
        }
    }
    if ( numArr[0]==2 && numArr[1]==5 )
        outputString = 'Launch Rocks!';
    if ( numArr[0]==3 && numArr[1]==5 )
        outputString = 'Code Rocks!';
    if (numArr.length===3)
        outputString = 'LaunchCode Rocks!';
    console.log(numArr);
    return outputString;
}

//console.log(temp(10));
console.log(temp(30));


module.exports = launchcode;

  

