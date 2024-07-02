const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
 
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
  for(let x = 0; x< numMeals; x++){
    meals[x] = [pantry[0][x], pantry[1][x], pantry[2][x], pantry[3][x], pantry[4][x]];
  }

  return meals;
}


function askForNumber() {
  
  /// CODE YOUR SOLUTION TO PART B here ///
  let flag = true;
  while(flag){
    numMeals = input.question("How many meals would you like to make? ");
    if(numMeals >0 && numMeals<= 6){
      flag = false;
    }else{
      console.log("Sorry the number of meals must between 1-6. Please try again.");
    }
  }
  

  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///
  
  for(let x = 0; x< string2.length; x++){
    code += string1[x] + string2[x];

  }

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  console.log(meals);
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  let password1 = '1234';
  let password2 = '5678';
  console.log("Time to run the password generator so we can update the menu tomorrow.")
  generatePassword(password1, password2);
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
