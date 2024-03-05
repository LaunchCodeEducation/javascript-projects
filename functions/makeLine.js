function makeLine(size) 
{
  let line = '';
   for (let i = 0; i < size; i++) 
    {
      line += '#';
      //line += optionalParameter;
    }
    return line;
  }

  function makeSquare(size)
  {
    let Square='';
    for (let i=0;i<size;i++)
    {
      Square+=(makeLine(size)+'\n');
    }   
    return Square; 
  }

  function makeRectangle(width, height)
  {
    let Rectangle='';
    for(let i=0;i<height;i++)
    {
       Rectangle+=(makeLine(width)+'\n');
    }
    return Rectangle;
  }

  function makeTriangle(height)
  {
    let triangle='';
    for(let i=0;i<height;i++)
    {
      triangle+=(makeLine(i)+'\n');
    }
    return triangle;
  }

  function makeSpaceLine(numSpaces, numChars)
  {
    
    let space = '';
    let spaceline = '';
    line = makeLine(numChars);
    for (let i=0; i<numSpaces; i++)
    {
       space += " ";
    }
    spaceline = space + line + space;
    return spaceline;
  } 

  function makeIsoscelesTriangle(height)
  {
    let triangle = '';
    for(let i=0;i<height;i++)
    {
      triangle+=(makeSpaceLine(height-i-1, 2*i+1)+'\n');
    }
    return triangle;
  }

  function ReverseTriangle(height)
  {
    let RTriangle = '';
    for(let i=height-1;i>0;i--)
    {
      RTriangle+=(makeSpaceLine(height-i-1, 2*i+1)+'\n');
    }
    return RTriangle;
  }

  function makeDiamond(height)
  {
    let diamondShape = makeIsoscelesTriangle(height) + ReverseTriangle(height);
    return diamondShape;
  }

console.log("Make Line");
console.log(makeLine(4));
console.log("---");
console.log("Make Square");
console.log(makeSquare(4));
console.log("---");
console.log("Make Rectangle");
console.log(makeRectangle(10,6));
console.log("---");
console.log("Make Triangle");
console.log(makeTriangle(5));
console.log("---");
console.log("Make Space Line");
console.log(makeSpaceLine(5,11));
console.log("---");
console.log("Make Isosceles Triangle");
console.log(makeIsoscelesTriangle(6));
console.log("---");
console.log("Make Diamonds");
console.log(makeDiamond(6));
