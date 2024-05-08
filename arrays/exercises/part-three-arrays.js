let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold array. Be sure to print the array after each step to confirm your updates.

//1) Insert the string 'keys' at index 3 without replacing any other entries.
cargoHold.splice(3,0,"keys");
console.log(cargoHold);
//2) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).
cargoHold.splice(4,1);
console.log(cargoHold);
//3) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.
cargoHold.splice(2,3,"cat","fob","string cheese");
console.log(cargoHold);