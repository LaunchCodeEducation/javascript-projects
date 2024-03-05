function hello(name) {
   if (name === undefined)
       name = "World";

   return "Hello, " + name + "!";
}

function doStringsMatch(string1, string2){
    if (string1 === string2) {
       return 'Strings match!';
    } else {
       return 'No match!';
    }
 }

module.exports = hello;