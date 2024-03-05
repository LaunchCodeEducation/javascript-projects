//Declare a class called CrewCandidate with a constructor that takes three parameters—name, 
//mass, and scores. Note that scores will be an array of test results.
class CrewCandidate
{
    constructor(name, mass, scores = []){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let total = 0;
        for(let i=0; i<this.scores.length; i++)
        {
            total += this.scores[i];
        }
        let averageOfScores = Math.round(total/this.scores.length*10)/10;
        return averageOfScores;
    }
    status(){
        let statusString='';
        let avg = this.average();
        if ( avg>90 )
            statusString ='Accepted';
        if ( avg>80 && avg<89 )
            statusString ='Reserve';
        if ( avg>70 && avg<79 )
            statusString = 'Probationary';
        if ( avg<70 )
            statusString = 'Rejected';
        return statusString;
    }
}
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log("Bubba Bear Object:");
console.log(bubbaBear);
console.log("Merry Maltese Object:");
console.log(merryMaltese);
console.log("Glad Gator Object:");
console.log(gladGator);

bubbaBear.addScore(89);
console.log("Bubba Bear Added Score:" +bubbaBear.scores);

console.log("Merry Maltese Average:" +merryMaltese.average());

console.log("-----");
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}`);
console.log("-----");
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}`);
console.log("-----");
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}`);

console.log("----");

let i = 0
while (gladGator.status() !== "Accepted") {
    console.log(gladGator.average())
    gladGator.addScore(100)
    i++
}
console.log("Gator Scores");
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`)
console.log(`${gladGator.name} needed to score 90% on ${i} tests to make the ${gladGator.status()} status.`)
// console.log("Increasing Glad Gator Status to reserver " + gladGator.addScore(90));
// console.log("Increasing Glad Gator Status to reserver " + gladGator.addScore(90));
// console.log("New Score for Glad Gator " + gladGator.scores);
// console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.