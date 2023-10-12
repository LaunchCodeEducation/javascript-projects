// launchcode.test.js code:
const launchcode = require('../index.js');


describe("Testing launchcode", function() {
  
  // Write your unit tests here!
  test("check organization", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("check executive Director", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  })
  test("check percentage of Cool Employees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })
  test("check programs offered", function(){
    expect(launchcode.programsOffered).toContain("Web Development")
    expect(launchcode.programsOffered).toContain("Data Analysis")
    expect(launchcode.programsOffered).toContain("Liftoff")
    expect(launchcode.programsOffered.length).toBe(3);

  })
}