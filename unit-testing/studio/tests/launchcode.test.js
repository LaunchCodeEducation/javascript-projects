// launchcode.test.js code:

const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("value of organization is nonprofit", function(){
    expect(launchcode.organization).toBe("nonprofit");
 });

 test("executiveDirector is Jeff", function(){
  expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("percentageCoolEmployees is 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
    });

    test("programsOffered should be Web Development, Data Analysis, Liftoff", function(){
      expect(launchcode.programsOffered[2]).toContain("Liftoff", "Data Analysis", "Web Development");
      expect(launchcode.programsOffered.length).toBe(3);
      });

      test("When passed a number that is ONLY divisible by 2, return 'Launch!'", function(){
        expect(launchcode.launchOutput(2)).toBe("Launch!");
      });

      test("When passed a number that is divisible by 2 and 5, return 'Launch Rocks!'", function(){
        expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
      });

      test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", function(){
        expect(launchcode.launchOutput(5)).toBe("Rocks!");
      });

      test("When passed a number that is divisible by 2,3 & 5 return 'LaunchCode Rocks!'", function(){
        expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
      });

      test("When passed a number that is divisible by 2 and 3, return 'LaunchCode!'", function(){
        expect(launchcode.launchOutput(36)).toBe("LaunchCode!");
      });

      test("When passed a number that is divisible by 3 and 5, return 'Code Rocks!'", function(){
        expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
      });

      test("When passed a number that is ONLY divisible by 3, return 'Code!'", function(){
        expect(launchcode.launchOutput(3)).toBe("Code!");
      });

      test("When passed a number that is NOT divisible by 2,3 & 5 return 'Rutabagas! That doesnt work.'", function(){
        expect(launchcode.launchOutput(11)).toBe("Rutabagas! That doesnt work.");
      });

});