const reverse = require('../reverse.js');

describe("reverse", function(){

  test("should not change a single character", function(){
    expect(reverse("a")).toBe("a");
  });

  test("should handle the empty string", function(){
    expect(reverse("")).toBe("");
  });

  test("should reverse a short string", function(){
    expect(reverse("dog")).toBe("god");
  });

  test("should reverse a long string", function(){
    expect(reverse("LaunchCode")).toBe("edoChcnuaL");
  });

});