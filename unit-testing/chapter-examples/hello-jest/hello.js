function hello(name) {
   if (name === undefined)
       name = "World";

   return "Hello, " + name + "!";
}

module.exports = hello;