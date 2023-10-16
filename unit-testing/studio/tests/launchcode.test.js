// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
	it("launchcode contains the correct value for key organization", function() {
		expect(launchcode).toHaveProperty("organization", "nonprofit");
	});
	it("launchcode contains the correct value for key executiveDirector", function() {
		expect(launchcode).toHaveProperty("executiveDirector", "Jeff");
	});
	it("launchcode contains the correct value for key percentageCoolEmployees", function() {
		expect(launchcode).toHaveProperty("percentageCoolEmployees", 100);
	});
	it("launchcode contains the correct value for array programsOffered", function() {
		expect(launchcode.programsOffered).toEqual(expect.arrayContaining(["Web Development"]));
	});
	it("launchcode contains the correct value for array programsOffered", function() {
		expect(launchcode.programsOffered).toEqual(expect.arrayContaining(["Data Analysis"]));
	});
	it("launchcode contains the correct value for array programsOffered", function() {
		expect(launchcode.programsOffered).toEqual(expect.arrayContaining(["Liftoff"]));
	});
	it("launchcode contains the correct length for array programsOffered", function() {
		expect(launchcode.programsOffered.length).toEqual(3);
	});
	it("launchOutput returns Launch! if number passed is only divisable by 2", function() {
            expect(launchcode.launchOutput(4)).toEqual("Launch!");
	});		
	it("launchOutput returns Code! if number passed is only divisable by 3", function() {
            expect(launchcode.launchOutput(9)).toEqual("Code!");
	});	
	it("launchOutput returns Rocks! if number passed is only divisable by 5", function() {
            expect(launchcode.launchOutput(25)).toEqual("Rocks!");
	});
	it("launchOutput returns LaunchCode! if number passed is only divisable by 2 and 3", function() {
            expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
	});
	it("launchOutput returns Code Rocks! if number passed is only divisable by 5 and 3", function() {
            expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
	});
	it("launchOutput returns Launch Rocks! (CRASH!!!!) if number passed is only divisable by 5 and 2", function() {
            expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
	});
	it("launchOutput returns LaunchCode Rocks! if number passed is only divisable by 5, 3, and 2", function() {
            expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
	});
	it("launchOutput returns Rutabagas! That doesn't work. if number passed is not divisable by 5, 3, or 2", function() {
            expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
	});
  
});