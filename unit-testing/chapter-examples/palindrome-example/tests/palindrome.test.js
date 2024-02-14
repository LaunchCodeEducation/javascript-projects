const isPalindrome = require('../palindrome.js');

describe("testing isPalindrome function", function () {
    test("should return true for a single letter", function(){
        expect(isPalindrome('a')).toBe(true);
    })
    test("should return true for a single letter repeated", function(){
        expect(isPalindrome('aaaa')).toBe(true);
    })
    test("should return true for a simple palindrome", function(){
        expect(isPalindrome('aba')).toBe(true);
    })
    test("should return true for a long palindrome", function(){
        expect(isPalindrome('racecar')).toBe(true);
    })
    test("should return false for a 2 letter word that is not palindrome", function(){
        expect(isPalindrome('ab')).toBe(false);
    })
    test("should return false for a long word that is not palindrome", function(){
        expect(isPalindrome('launchcode')).toBe(false);
    })
    test("should return false for a word that is palindrome by considering difference in case", function(){
        expect(isPalindrome('abA')).toBe(false);
    })
    test("should return false for a word that is palindrome by considering whitespace", function(){
        expect(isPalindrome('so many dynamos')).toBe(false);
    })
    test("should consider the empty string a palindrome", function() {
        expect(isPalindrome("")).toBe(true);
    });
})