//Chatper 7
let word = 'JavaScript';
console.log(word.slice(4).toUpperCase())
let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
let newLanguage = (language.replace('J', 'Q').slice(0,5));
console.log(newLanguage);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();
console.log(trimmed);

let nonprofit = "LaunchCode";

console.log(nonprofit.charCodeAt(0));
console.log(nonprofit.charCodeAt(1));
console.log(nonprofit.charCodeAt(2));
console.log(nonprofit.charCodeAt(3));
console.log(nonprofit.charCodeAt(4));
console.log(nonprofit.charCodeAt(5));
console.log(nonprofit.charCodeAt(6));
console.log(nonprofit.charCodeAt(7));
console.log(nonprofit.charCodeAt(8));
console.log(nonprofit.charCodeAt(9));

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);

console.log("A message\nbroken across lines,\n\tand indented");
console.log("A message\nbroken across lines,\tand indented");
console.log("The dog's favorite toy is a stuffed hedgehog, said Chris");
console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");
console.log('Launch\nCode');

let programmingLanguages = [
    'JavaScript',
    "Python",
    "Java",
    "C#",
    "Op",
];

console.log(programmingLanguages);
console.log(programmingLanguages.includes("Python"));
console.log(programmingLanguages.indexOf("Python"));
console.log(programmingLanguages.reverse());
console.log(programmingLanguages.sort());
console.log(programmingLanguages.push("Qr"));
console.log(programmingLanguages.shift());
console.log(programmingLanguages);
console.log(programmingLanguages.pop());


console.log(programmingLanguages.splice(0,3));
console.log(programmingLanguages.unshift("#1"));
console.log(programmingLanguages);

let programmingLanguages2 = [
    "y2",
    '2y3',
]

console.log(programmingLanguages.concat(programmingLanguages2));
let com2 = (programmingLanguages.concat(programmingLanguages2).join(" "));
console.log(programmingLanguages.concat(programmingLanguages2).sort());
console.log(programmingLanguages.slice(1,3));
console.log(com2);
console.log(com2.split(" "));

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);
let str = 'LaunchCode|students|rock!';
console.log(str.split('|'));

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
 
console.log(groceryBag.slice(2,3)); 
console.log(groceryBag.splice(2,3));
console.log(groceryBag);

let groceryBag2 = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = groceryBag2.slice(2, 5).sort();
 
console.log(selectedItems);

let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];
school[0].push("dance");
console.log(school[1].unshift("Holmes"));
console.log(school);

pet = "cat";
console.log(pet+"s");
console.log(pet += "s"); 

let pluralNoun = "grapes";
let name = "Lily";
let verb = "chew";
let adjective = "beautiful";
let color = "blue";

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")
const classes = "Felica, Zhou".split(", ");
console.log(classes)

const teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(classes.length);
console.log(teachers.length);

cityName = "Vienna";

stateName = "Virginia";

location = cityName + ", " + stateName;

console.log(location.length);
