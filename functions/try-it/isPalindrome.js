let fileLogger = function(msg) {

   // Put the message in a file
}

function logError(msg, logger) {
   let errorMsg = 'ERROR: ' + msg;
   logger(errorMsg);
}

logError('Something broke!', fileLogger);

function addTwoToNumber(num){
   return num += 2;
}

function addFiveToNumber(value){
   let result = addTwoToNumber(value) + 3;
   return result;
}

console.log(addFiveToNumber(12))