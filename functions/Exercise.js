function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
        line = line + "#";
    }
    return line;
}

console.log(makeLine(5));


// call makeLine function to create each row of the square
function makeSquare(size) {
    let square = "";
    for (let i = 0; i < size; i++) {
        if (i === size - 1) {
            square += makeLine(size);
        } else { 
            square += makeLine(size) + "\n";
        }
    }
    return square;
}
// console.log(makeSquare(5));

function makeRectangle(width,height){
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        if (i === height - 1) {
            rectangle += makeLine(width);
        } else { 
            rectangle += makeLine(width) + "\n";
        }
    }
    return rectangle;
}
console.log(makeRectangle(5,3));

function makeDownwardStairs(height) {
    let stairs = "";
    for (let i = 0; i < height; i++) {
        if (i === height - 1) {
            stairs += makeLine(i + 1);
        } else {
            stairs += makeLine(i + 1) + "\n";
        }
    }
    return stairs;
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    for (let i = 0; i < numSpaces; i++) {
        spaces += " ";
    }
    for (let j = 0; j < numChars; j++) {
        spaces += "#";
    }
    for (let k = 0; k < numSpaces; k++) {
        spaces += " ";
    }
    return spaces;
}
// console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height){
    let triangle="";
    for (let i = 0; i < height; i++) {
        triangle += " ";
        if (i%2===0){
        if (i === height - 1) {
            triangle += makeLine(i+1);
        } else { 
            triangle +=" "+ makeLine(i+1) + "\n";
        }
    }
    }


    return triangle;
}
console.log(makeIsoscelesTriangle(5));