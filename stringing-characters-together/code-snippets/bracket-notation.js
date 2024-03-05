let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let firstInitial = jsCreator[0];
let lastInitial = jsCreator[8];

let outputStr = "JavaScript was created by somebody with initials " + 
   firstInitial + "." +
   lastInitial + ".";

console.log(outputStr);

let myStr = 'Index';
if (myStr[0] === 'I')
{
    console.log("correct");
}

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

let nonprofit = "LaunchCode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;
console.log(location);
console.log(location.length);