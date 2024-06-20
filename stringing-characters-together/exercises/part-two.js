//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log("dna: " + dna);
//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
console.log("dna trimmed: " + dna.trim());


//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log("dna uppercase: " + dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim();
dna = dna.toUpperCase();
console.log("dna trimmed and upper case: " + dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
console.log("dnaTwo = " + dnaTwo);
console.log("dnaTwo replaced = " +dnaTwo.replace("GCT", "AGG"));
//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dnaTwo.indexOf("CAT") != -1){
    console.log("CAT gene found");
}else {
    console.log("CAT gene NOT found");
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log("The fifth gene is " + dnaTwo.slice(16, 19));
//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log("The DNA strand is " + dnaTwo.length + " characters long.");
//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
let tac = dna.slice(4,7);
let cat = dna.slice(40,43);
console.log(tac.toLowerCase() + "o " + cat.toLowerCase());