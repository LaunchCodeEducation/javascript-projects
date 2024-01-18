// Exercise 1 for "Advanced Strings" //
/* let num = 123.45;
if (String(num).includes('.')){
    console.log(string(num).length - 1);
} else {
    console.log(string(num).length);
} */

// Exercise 2 for  "Advanced strings //
dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT "
dna = dna.trim().toUpperCase();
console.log(dna);
dna = dna.replace('GCT','AGG');
console.log(dna);
if (dna.indexOf('CAT') === -1) {
    console.log('CAT found');
}else {
    console.log('CAT NOT found');
}
console.log(dna.slice(16,19));
console.log (`The DNA strand is, ${dna.length} characters long.`);

// Part 3 ?? //
let code = 'Javascript'

console.log(code.slice(0,1) + code.slice(4,5));
console.log(code.slice(0,1).slice(4,5));
console.log(`${code.slice(0,1).slice(4,5)}`);
