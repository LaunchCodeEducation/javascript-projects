/**
 * @jest-environment node
 */

const fs = require('fs');
const path = require("path");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM(fs.readFileSync(path.resolve(__dirname, "../index.js"), 'utf8'));
const { document } = window;
const { screen } = require('@testing-library/jest-dom');

//NOTE: Do NOT modify any of the code below.

//These are the tests.  To run them and check your own status, type "npm test" into the console.  Running tests is optional.
const solution = require('../array-testing');

describe("Array Studio Solution", function() {
	
	it("strings[0] is '12,9,6,3' after method chaining", function() {
		let testArray = solution.reverseCommas(strings[0]);	
		expect(testArray).toBe("12,9,6,3");
		});

	it("strings[1] is 'A-C-E-M' after method chaining", function() {
		let testArray = solution.semiDash(strings[1]);
		expect(testArray).toBe("A-C-E-M");
	});

	it("strings[2] is 'string space deliminated' after method chaining", function() {
		let testArray = solution.reverseSpaces(strings[2]);
		expect(testArray).toBe("string space delimited");
	});

	it("string[3] is 'caution,typing,require,might,Comma-spaces' after method chaining", function() {
		let testArray = solution.commaSpace(strings[3]);
		expect(testArray).toBe("caution,typing,require,might,Comma-spaces");
	});
});
