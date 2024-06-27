


//let arr = ['hello', 'world', 123, 'orange'];

//arr.reverse()
//console.log(arr);


function reverseCharacters(str){
    
    if (typeof str === "string"){
        let temp = str.split("");
        str = temp.reverse().join("");
    }
    if (typeof str === "number"){
        let temp = String(str).split("");
        str = Number(temp.reverse().join(""));
        
    }
    

    return str;
}
function completeReversal(arr){
    let temp = [];
    for (let x = 0; x<arr.length; x++){
        temp[x] = reverseCharacters(arr[x]);
    }
    return temp;
}
console.log(reverseCharacters("apple"));
console.log(reverseCharacters("LC101"));
console.log(reverseCharacters("Capitalized Letters"));
console.log(reverseCharacters("I love the smell of code in the morning."));
console.log(reverseCharacters(1234));
console.log(reverseCharacters("LC101"));
console.log(reverseCharacters(8675309));
console.log(reverseCharacters("radar"));
console.log(completeReversal(['apple', 'potato', 'Capitalized Words']));
console.log(completeReversal([123, 8897, 42, 1138, 8675309]));
console.log(completeReversal(['hello', 'world', 123, 'orange']));

function funPhrase(str){
    if (str.length<=3)
        return str[length-1];
    else
        return str.slice(0,3);
}
let str = 'Functions rock!';
console.log(`We put the ${funPhrase(str)} in ${str}.`);

function area(length, width){
    if(width === undefined){
        return length*length;
    }
    return length*width;
}
console.log(`The area of 2 cm and 4 cm retangle is ${area(2,4)} cm^2`);
console.log(`The area of 14 cm and 7 cm retangle is ${area(14,7)} cm^2`);
console.log(`The area of 20 cm square is ${area(20)} cm^2`);
