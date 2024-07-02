let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let first = function(str){
    return str[0];
}
let firstInitials = names.map(first);

console.log(firstInitials);
