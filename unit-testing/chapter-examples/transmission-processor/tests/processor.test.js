const processor = require('../processor.js');

describe("transmission processor", function() {

   test("takes a string returns an object", function() {
      let result = processor("9701::<489584872710>");
      expect(typeof result).toBe("object");
   });

   test("returns -1 if '::' not found", function() {
      let result = processor("9701<489584872710>");
      expect(result).toBe(-1);
   });

   test("returns id in object", function() {
     let result = processor("9701::<489584872710>");
     expect(result.id).not.toBeUndefined();
   });   
   
   test("converts id to a number", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
   });

   test("returns rawData in object", () => {
    let result = processor("9701::<487297403495720912>");
    expect(result.rawData).not.toBeUndefined();
   });

   test("returns -1 for rawData if missing < at position 0", function() {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
   });

});