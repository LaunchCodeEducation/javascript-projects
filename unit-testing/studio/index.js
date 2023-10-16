
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(i){
        if(i%2==0 && i%3!=0 && i%5!=0)
        {
            return 'Launch!';
        }
        else if(i%2!=0 && i%3==0 && i%5!=0)
        {
            return 'Code!';
        }
        else if(i%2!=0 && i%3!=0 && i%5==0)
        {
            return 'Rocks!';
        }
        else if(i%2==0 && i%3==0 && i%5!=0)
        {
            return 'LaunchCode!';
        }
        else if(i%2!=0 && i%3==0 && i%5==0)
        {
            return 'Code Rocks!';
        }
        else if(i%2==0 && i%3!=0 && i%5==0)
        {
            return 'Launch Rocks! (CRASH!!!!)';
        }
        else if(i%2==0 && i%3==0 && i%5==0)
        {
            return 'LaunchCode Rocks!';
        }
        else if(i%2!=0 && i%3!=0 && i%5!=0)
        {
            return "Rutabagas! That doesn't work.";
        }
    }
}

module.exports = launchcode;

