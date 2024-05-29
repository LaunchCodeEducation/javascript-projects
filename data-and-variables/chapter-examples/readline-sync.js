const input= require('readline-sync');
console.log("Welcome to amazon: The Original");
console.log("Do you want to buy books?");
const wantToBuy = input.question("Do you want to buy books?");

if (wantToBuy===true) {
   console.log("come back later!");
} else {
   console.log("I didn't want to sell to you anyway");
}
console.log("How many books do you want to buy?");
const numberTobuy = input.question("Enter the number of books:");

if (numberTobuy >= 20){
   console.log("Awesome! Let's do business!!");
}   else if (numberTobuy >10 && numberTobuy < 20){
      console.log("That's ok, but I would rather bought more.");   
}   else {
   console.log("Go away, cheapskate!");
}

console.log("of these, which is your favorite?");
console.log("1")