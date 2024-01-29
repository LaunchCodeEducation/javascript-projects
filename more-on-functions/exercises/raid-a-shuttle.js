function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 
              'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

let nonSuspiciousFunction = 
function(a) 
{
  if (checkFuel(a) === 'green') {
     return a - 100001;
  }
  else if (checkFuel(a) === 'yellow') {
     return a - 50001;
  }
  else {
     return a;
  }
};

console.log(nonSuspiciousFunction(100500));

/* Steal some fuel from the shuttle:
 */
 
//a). Define an anonymous function and set it equal to a variable with a normal, 
//non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.
//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce 
//the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.




/* Next, liberate some of that glorious cargo.
 * /

//a). Define another anonymous function with an array as a parameter, and set it equal to another 
innocent variable.

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get 
us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in 
storage. You need to replace what you steal with something worthless. The count MUST stay the 
same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

/* Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows 
MATH and saves us more gold than you can imagine.
 * /
 
//a). Define a function called irs that can take fuelLevel and cargoHold as 
arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, 
"Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."*/

let deckMops = function (b) {
  return b.splice(3, 2, 'garbage', 'trash');
}

let irs = function(levelOfFuel, itemsInCargo) {
  let arr = deckMops(itemsInCargo);
  return `Raided ${nonSuspiciousFunction(levelOfFuel)} kg of fuel from the tanks, and stole 
  ${arr[0]} and ${arr[1]} from the cargo hold.`
}
console.log(irs(100500, cargoHold));