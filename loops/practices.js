let breadType = 'White';
let fillingType = 'Ham'
let  condimentsArr = ['mustard','mayon','ketch'];
let compSand = [];
function makeSandwich(breadType,fillingType,condimentsArr) {
   for(let i = 0; i < condimentsArr.length; i++){
  compSand.push(condimentsArr[i]+ ' ' + breadType+ ' ' + fillingType);
 }
 return compSand;
}
console.log(makeSandwich(breadType,fillingType,condimentsArr));