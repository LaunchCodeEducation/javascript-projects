
const processor = require('../processor.js');


describe("transmission processor", function() 
{
    //  TODO: put tests here
    test("takes a string returns an object", function() 
    {
      let result = processor("9701::<489584872710>");
      expect(typeof result).toBe("object");
    });

    test("returns -1 if '::' not found", function() 
    {
      let result = processor("9701<489584872710>");
      expect(result).toBe(-1);
    });

    test("returns id in object", function() 
    {
      let result = processor("9701::<489584872710>");
      expect(result.id).not.toBeUndefined();
    });

    test("converts id to a number", function() 
    {
      let result = processor("9701::<489584872710>");
      expect(result.id).toBe(9701);
   });

   test("returns rawData in object", () => 
   {
      let result = processor("9701::<487297403495720912>");
      expect(result.rawData).not.toBeUndefined();
   });
 

    test("returns -1 for rawData if missing < at position 0", function()
    {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
    });

    test("returns -1 for rawData if > at middle", function() 
    {
    let result = processor("9701::8729740349572>0912");
    expect(result.rawData).toBe(-1);
    });

  test("returns -1 for rawData if < at middle", function() 
  {
    let result = processor("9701::4872<97403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if no symbols", function() 
  {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if more than one <", function() 
  {
    let result = processor("9701::<487297403495<720912>");

    expect(result.rawData).toBe(-1);
  });

  test("trim leading and trailing whitespace from transmission", function(){
    let result = processor("  9701::<487297403495720912>  ");
    expect(result.id+"::"+result.rawData).toBe("9701::<487297403495720912>");
  });

  test("Return -1 if the id part of the transmission cannot be converted to a number", function(){
    let result = processor("text::<487297403495720912>");
    expect(result.id).toBe(NaN);
  });

  test("Return -1 if more than one :: is found in transmission", function(){
    let result = processor("text::::<487297403495720912>");
    expect(result).toBe(-1);
  });
});