//const { describe } = require("node:test");
const checkFive = require("../checkFive.js");

describe("checkFive", () => {
    it("should return 'num is less than 5' when num < 5", () => {
        let output = checkFive(2);
       expect(output).toBe("2 is less than 5.")
    });
    test("returns 'num is equal to 5' when num === 5", () => {
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.")
    });
    test("returns 'num is greater than 5' when num > 5", () => {
        let output = checkFive(8);
        expect(output).toBe("8 is greater than 5.")
    })
})