let protoArray1 = "3,6,9,12";
let protoArray2 = "M;E;C;A";
let protoArray3 = "delimited space string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas(checkCommaString) {
	//TODO: 1. create and initiate your variables.
	let check = checkCommaString.includes(",");
	let output;
	//TODO: 2. write the code required for this step
	if (check) {
		output = checkCommaString.split(",").reverse().join(",");
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash(checkSemiString) {
	let check = checkSemiString.includes(";");
	let output;
	//TODO: write the code required for this step
	if (check) {
		output = checkSemiString.split(";").reverse().join("-");
	}

	return output;
}

//4)
function reverseSpaces(checkSpaceString) {
	let check = checkSpaceString.includes(" ");
	let output;
	//TODO: write the code required for this step
	if (check) {
		output = checkSpaceString.split(" ").reverse().join(" ");
	}
	return output;
}

//5)
function commaSpace(checkcommaSpace) {
	let check = checkcommaSpace.includes(", ");
	let output;
	//TODO: write the code required for this step
	if (check) {
		output = checkcommaSpace.split(", ").reverse().join(",")
	}
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
