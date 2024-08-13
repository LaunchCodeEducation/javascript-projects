// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  it("should pass the value of organization as 'nonprofit.", function(){
    let result = launchcode.organization;
    expect(result).toBe('nonprofit');
  });

  it("should pass the value of 'executiveDirector' as 'Jeff'", function(){
    let result = launchcode.executiveDirector;
    expect(result).toBe("Jeff");
  });

  it("should pass the value of 'percentageCoolEmployees' as '100'", function(){
    let result = launchcode.percentageCoolEmployees;
    expect(result).toBe(100);
  });

  it("should contain the value 'LC101', 'LaunchCode Women+', and 'CodeCamp' in the key 'programsOffered'", function(){
    let result = launchcode.programsOffered;
    expect(result).toContain("LC101");
    expect(result).toContain("LaunchCode Women+");
    expect(result).toContain("CodeCamp");
    expect(result.length).toBe(3);
  });

  it("should return 'Launch!' when passed a number ONLY divisable by 2", function(){
    let result = launchcode.launchOutput(2);
    expect(result).toBe("Launch!");
  });

  it("should return 'Code!' when passed a number ONLY divisable by 3", function(){
    let result = launchcode.launchOutput(9);
    expect(result).toBe("Code!");
  });

  it("should return 'Rocks!' when passed a number ONLY divisable by 5", function(){
    let result = launchcode.launchOutput(25);
    expect(result).toBe("Rocks!");
  });

  it("should return LaunchCode! when passed a number divisable by ONLY 2 AND 3", function(){
    let result = launchcode.launchOutput(6);
    expect(result).toBe("LaunchCode!");
  });

  it("should return 'Code Rocks!' when passed a number ONLY divisab le by 3 AND 5", function(){
    let result = launchcode.launchOutput(15);
    expect(result).toBe("Code Rocks!");
  });

  it("should return 'Launch Rocks!' when passed a number ONLY divisable by 2 AND 5", function(){
    let result = launchcode.launchOutput(10);
    expect(result).toBe("Launch Rocks!");
  });

  it("should return 'LaunchCode Rocks!' when passed a number divisable by 2, 3, and 5", function(){
    let result = launchcode.launchOutput(30);
    expect(result).toBe("LaunchCode Rocks!");
  })



});
