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
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

// Steal some fuel from the shuttle:
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.
let anonymFunction = function(a) {
  //b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.
  if (checkFuel(a) === 'green') {
     //c). Once you figure out how much fuel to pump out, return that value.
     return a - 100001;
  }
  else if (checkFuel(a) === 'yellow') {
     return a - 50001;
  }
  else {
     return a;
  }
};
//d). Decide where to best place your function call to gather our new fuel.
console.log('Stealed fuel:' +anonymFunction(fuelLevel));
// Next, liberate some of that glorious cargo.
//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.
let anonymousCargoFunction = function(arrayOfCargo){
  let liberatedCargo = [];
  let count = 0;
  while( count < 2 ) {
    let randomNumber = Math.floor(Math.random() * (arrayOfCargo.length-1 - 0 + 1)) + 0;
    if(arrayOfCargo[randomNumber] !== 'water' && !arrayOfCargo[randomNumber].includes('hidden')){
      //b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.
      liberatedCargo[count] = arrayOfCargo[randomNumber];
      //c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.
      arrayOfCargo[randomNumber] = 'hidden';
      count++;
    }
  }
  return liberatedCargo;
}
//d). Don’t get hasty, matey! Remember to test your function.
console.log("Hold status: Before stealing: "+ holdStatus(cargoHold));
console.log('cargo before stealing: ' +cargoHold);
console.log('liberated cargo: '+ anonymousCargoFunction(cargoHold));
console.log("Hold status: After stealing: "+ holdStatus(cargoHold));
console.log('cargo after stealing: ' +cargoHold);

// Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
let irs = function(fuelLevel, itemsInCargo){
  //b). Call your anonymous fuel and cargo functions from within irs.
  let stolenCargo = anonymousCargoFunction(itemsInCargo);
  //c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."
  return `Raided ${anonymFunction(fuelLevel)} kg of fuel from the tanks, and stolen ${stolenCargo[0]} and ${stolenCargo[1]} from the cargo hold.`;
}
console.log( irs(fuelLevel, cargoHold));