// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function () {

  test("check if value of organization is 'nonprofit'", () => {
    expect(launchcode.organization).toBe("nonprofit");
  })
  test("check if value of executiveDirector is 'Jeff'", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  })

  test("check if value of percentageCoolEmployees is '100'", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })
  test("check if value of programsOffered is correct array", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
    

  })
  
  // Write your unit tests here!js

});


describe("Launch output", () => {


  test("When passed a number that is ONLY divisible by 2 returns 'Launch!'", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!")
  })
  test("When passed a number that is ONLY divisible by 3 returns 'Code!'", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!")
  })
  test("When passed a number that is ONLY divisible by 5 returns 'Rocks!'", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!")
  })
  test("When passed a number that is ONLY divisible by 2 and 3 returns 'Launchcode!'", () => {
    expect(launchcode.launchOutput(6)).toBe("Launchcode!");
  })
  test("When passed a number that is ONLY divisible by 2 and 5 returns 'Launch Rocks! (CRASH!!!!)'", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  })

})