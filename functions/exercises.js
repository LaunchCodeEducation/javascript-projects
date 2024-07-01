function makeLine(size, char){
    let tempChar = "#";
    if (char != undefined){
        tempChar = char;
    }
    let str = "";
    for (let x = 0; x<size; x++){
        str += tempChar;
    }
    
    return str;
}


function makeSquare(size, char){
    let tempChar = "#";
    if (char != undefined){
        tempChar = char;
    }
    let str = "";
    for (let x = 0; x<size; x++){
        str += makeLine(size, tempChar) + "\n";
    }
    
    return str;
}

function makeTriangle(height, char){
    let tempChar = "#";
    if (char != undefined){
        tempChar = char;
    }
    let str = "";
    for (let x = 0; x<=height; x++){
        str += makeLine(x, tempChar) + "\n";
    }
    
    return str;
}

function makeSpaces(numSpaces, numChars, char){
    let spaces = "";
    let tempChar = "#";
    if (char != undefined){
        tempChar = char;
    }
    for (let x = 0; x<numSpaces; x++){
        spaces += " ";
    }
    
    return spaces + makeLine(numChars, tempChar) + spaces;
}
function makeIsoscelesTriangle(height, char){
    let str = "";
    let tempChar = "#";
    if (char != undefined){
        tempChar = char;
    }
    for (let x = 0; x<height; x++){
        str += makeSpaces(height-x-1, 2*x+1, tempChar) + "\n";
    }
    
    return str;
}

function makeDiamonds(height, char){
    let str = "";
    let tempChar = "#";
    if (char != undefined){
        tempChar = char;
    }
    str = makeIsoscelesTriangle(height, tempChar);
    for (let x = height-1; x>=0; x--){
        str += makeSpaces(height-x-1, 2*x+1, tempChar) + "\n";
    }
    
    return str;
}
console.log(makeLine(4));
console.log(makeLine(5, "$"));
console.log(makeSquare(5, "%"));
console.log(makeTriangle(5, "&"));
console.log(makeSpaces(3,5, "*"));
console.log(makeIsoscelesTriangle(5, "^"));
console.log(makeDiamonds(5, "@"));
