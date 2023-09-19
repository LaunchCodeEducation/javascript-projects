function combineEntries(arrayName) {
  if (arrayName.length <= 1){
    return arrayName[0];
  } else {
    //console.log(arrayName[0], arrayName.slice(1));
    return arrayName[0] + combineEntries(arrayName.slice(1));
  }
}

//First, run the code to see the result.

//Next, uncomment the console.log statement above to see how each call to combineEntries looks at a different section of the original array.

let arr = ['L', 'C', '1', '0', '1'];

console.log(combineEntries(arr));
