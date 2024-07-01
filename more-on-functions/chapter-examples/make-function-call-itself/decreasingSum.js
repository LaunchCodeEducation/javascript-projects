function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
     return decreasingSum(integer-1)+integer;
   }
}

console.log(decreasingSum(5));
