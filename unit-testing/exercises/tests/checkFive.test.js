const checkFive = require("../checkFive");

describe("checkFive", function(){

    test("should product less than message when the number less than 5", function() {
       //code here...
       let output = checkFive(2);
       expect(output).toEqual("2 is less than 5.");
    });

    test("should product greater than message when the number greater than 5", function(){
        let output = checkFive(6);
        expect(output).toEqual("6 is greater than 5.");
    });

    test("should product equan message when the same number given", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

 })