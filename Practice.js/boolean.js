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
    console.log('CAT NOT found')
}
