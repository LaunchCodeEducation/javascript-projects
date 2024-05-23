function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  console.log(makeLine(5));

  function makeSquare(size){
    let square = '';
    for (let i = 0; i < size; i++) {
    square += (makeLine(size) + '\n');
    }
    return square;
    return makeRectangle(size,size)
  }
  console.log(makeSquare(5));

  function makeRectangle(width, height){
    let rectangle ='';
    for(i=0; i< height;i++){
    rectangle+= (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
  console.log(makeRectangle(5,3));

  function makeDownwardStairs(height){
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i+1) + '\n';
      }
    return stairs;
  }
  console.log(makeDownwardStairs(5));

  function makeSpaceLine(numSpaces, numChars){
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
    }
    return line + makeLine(numChars) + line;
  }
  console.log(makeSpaceLine(3, 5));

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log(makeIsoscelesTriangle(5));
  function makeDiamond(height){
    let diamond= '';
    let string ="";
for (let i = 0; i < height; i++) {
for (let j = 0; j < i; j++) {
    string += " ";
 }
 for (let k = 0; k < 2 * (height-i) - 1; k++) {
    string += "#";
  }
  string += "\n";
}
//console.log(string);
diamond = makeIsoscelesTriangle(height) +'\n'+ string;
    return diamond;

  }
  console.log(makeDiamond(5));

