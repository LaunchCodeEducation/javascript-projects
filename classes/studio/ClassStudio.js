//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate { 
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    cheater() {
        this.scores.push(100);
    }
    average(){
        let sum = 0;
        for (let i=0; i<this.scores.length; i++){
            sum = sum + this.scores[i];
        }
        return (Math.round(10*(sum/(this.scores.length))))/10
    }
    status(averageScore=this.average()){
        if (averageScore>=90){
            return 'Accepted';
        } else if (averageScore >= 80) {
            return 'Reserve';
        } else if (averageScore >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
};

let bear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let birdDog = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);


//bear.addScore(83);
//console.log(bear.scores);
//console.log(bear.status());
//console.log(bear.average());
//console.log(birdDog,bear,gator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

while (!(gator.status() === 'Accepted')) {
    gator.cheater();
}

function display(candidate) {
console.log(`${candidate.name} earned an average test score of ${candidate.average()}% and has a status of ${candidate.status()}.`);
}
display(bear)
display(birdDog)
display(gator)
console.log(gator.scores);
//Part 4 - Use the methods to boost Glad Gator's status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.














//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
