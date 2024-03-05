function checkFive(num){
   let result = '';
   if (num < 5){
     result = num + " is less than 5.";
   } else if (num === 5){
     result = num + " is equal to 5.";
   } else {
     result = num + " is greater than 5.";
   }
   return result;
 }

 module.exports = checkFive;