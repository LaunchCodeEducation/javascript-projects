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
    
    average(){
       const sum = this.scores.reduce((acc, score) => acc + score, 0);
       const avg = sum / this.scores.length;
       return avg.toFixed(1)
    }

    status(){
        const avg = this.average();
        if (avg >= 90){
            return "Accepted";
        } else if (avg >= 80){
            return "Reserve";
        } else if (avg >= 70){
            return "Probationary";
        } else{
            return "Rejected";
        }
    }
}
const bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90])
const merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97])
const gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62])
bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log(`Merry's average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`Bubba's average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`Gator's average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
while (gladGator.status() !== 'Accepted') {
    gladGator.addScore(100);
  }
  
  console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);
  