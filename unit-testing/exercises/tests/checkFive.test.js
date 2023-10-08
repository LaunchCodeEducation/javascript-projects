const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Descriptive feedback...", function(){
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

   test("Descriptive feedback...", function(){
      let output = checkFive(5);
      expect(output).toEqual("5 is equal to 5.");
   });

   test("Descriptive feedback...", function(){
      let output = checkFive(29);
      expect(output).toEqual("29 is greater than 5.");
   });

});