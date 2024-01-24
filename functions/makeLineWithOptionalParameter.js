function makeLine(size, optionalParameter = '#') 
{
  let line = '';
   for (let i = 0; i < size; i++) 
    {
      line += optionalParameter;
    }
    return line;
  }

  function makeSquare(size, optionalParameter = '#')
  {
    let Square='';
    for (let j=0;j<size;j++)
    {
        Square+=(makeLine(size, optionalParameter)+'\n');
    }    
    return Square;
  }

  function makeTriangle(height, optionalParameter = '#')
  {
    let triangle='';
    for(let i=0;i<height;i++)
    {
      triangle+=(makeLine(i, optionalParameter)+'\n');
    }
    return triangle;
  }

  function makeSpaceLine(numSpaces, numChars, optionalParameter = '#')
  {
    let space = '';
    let spaceline = '';
    line = makeLine(numChars, optionalParameter);
    for (let i=0; i<numSpaces; i++)
    {
       space += " ";
    }
    spaceline = space + line + space;
    return spaceline;
  } 

  function makeIsoscelesTriangle(height, optionalParameter = '#')
  {
    let triangle = '';
    for(let i=0;i<height;i++)
    {
      triangle+=(makeSpaceLine(height-i-1, 2*i+1, optionalParameter)+'\n');
    }
    return triangle;
  }

  function ReverseTriangle(height, optionalParameter = '#')
  {
    let RTriangle = '';
    for(let i=height-1;i>0;i--)
    {
      RTriangle+=(makeSpaceLine(height-i-1, 2*i+1, optionalParameter)+'\n');
    }
    return RTriangle;
  }

  function makeDiamond(height, optionalParameter= '#')
  {
    let diamondShape = makeIsoscelesTriangle(height, optionalParameter) + ReverseTriangle(height, optionalParameter);
    return diamondShape;
  }

console.log("Make Line with Optional Parameter");
console.log(makeLine(4));
console.log("---");
console.log("Make Line without Optional Parameter");
console.log(makeLine(4, '*'));
console.log("---");
console.log("Make Square");
console.log(makeSquare(4, '*'));
console.log("---");
console.log(makeSquare(4));
console.log("---");
console.log("Make Triangle");
console.log(makeTriangle(5));
console.log("---");
console.log(makeTriangle(5,'^'));
console.log("---");
console.log("Make Space Line");
console.log(makeSpaceLine(5,11,'@'));
console.log("---");
console.log(makeSpaceLine(5,11));
console.log("Make Isosceles Triangle");
console.log(makeIsoscelesTriangle(6));
console.log("---");
console.log(makeIsoscelesTriangle(6, 'M'));
console.log("---");
console.log("Make Diamonds");
console.log(makeDiamond(6));
console.log("---");
console.log(makeDiamond(6,'P'));
