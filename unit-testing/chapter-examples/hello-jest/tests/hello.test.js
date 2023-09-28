const hello = require('../hello.js');

describe("hello world test", function(){

      test("should return a custom message when name is specified", function(){
         expect(hello("Jest")).toBe("Hello, Jest!");
      });

      it("should return a general greeting when name is not specified", function(){
        expect(hello()).toBe("Hello, World!");
    });

});