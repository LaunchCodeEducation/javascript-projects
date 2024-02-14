const processor = require('../processor.js');
describe("transmission processor", function() {

   //  TODO: put tests here
  test("takes a string and returns an object", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if input doesnot contain ::", function(){
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function(){
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("id should be a number", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result.id).toBe("number");
  });

  test("returns raw data in object", function(){
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 if rawData doesnt contain < in starting , > at the end", function(){
    let result = processor("9701::<48729740349>5720912");
    expect(result.rawData).toBe(-1);
  });

 });