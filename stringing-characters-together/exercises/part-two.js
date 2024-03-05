//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log('DNA : '+dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
let dna_trim = dna.trim();
console.log("DNA with Trim Function : " +dna_trim);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
let dna_uppercase = dna.toUpperCase();
console.log("DNA with Uppercase Function : " +dna_uppercase);

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. 
//To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE 
//with no whitespace.
let dna_uppercase_trim = dna.toUpperCase().trim();
console.log("DNA with Uppercase and Trim Function : " +dna_uppercase_trim);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.

let GCT_AGG = dna.replace("GCT","AGG");
console.log("DNA with Replace GCT to AGG : " +GCT_AGG);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", 
//otherwise print, "CAT gene NOT found".

if (dna.toUpperCase().indexOf("CAT"))
{
    console.log("CAT gene found");
}
else
{
    console.log("CAT gene NOT found")
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dna.trim().slice(16,19));

//4) Use a template literal to print, "The DNA strand is ___ characters long."
let dna_length=dna.length;
console.log(`The DNA strand is ${dna_length} characters long.`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 
//'taco cat'.
console.log(`${dna_trim.slice(4,7).toLowerCase()}o ${dna_trim.slice(dna_trim.toUpperCase().indexOf('CAT'),
           dna_trim.toUpperCase().indexOf('CAT')+3).toLowerCase()}`);
