function checkFuel(level) {
    if (level > 100000){
       return 'green';
    } else if (level > 50000){
       return 'yellow';
    } else {
       return 'red';
    }
 }
 
 function holdStatus(arr){
    if (arr.length < 7) {
       return `Spaces available: ${7 - arr.length}`;
    } else if (arr.length > 7){
       return `Over capacity by ${arr.length - 7} items.`
    } else {
       return "Full";
    }
 }
 
 let fuelLevel = 200000;
 let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
 
 console.log("Fuel level: "+ checkFuel(fuelLevel));
 console.log("Hold status: "+ holdStatus(cargoHold));

 let nonSuspiciousFunction = function (a){
    if (checkFuel(a) === 'green') {
        return a - 100001;
     }
     else if (checkFuel(a) === 'yellow') {
        return a - 50001;
     }
     else {
        return a;
     }
 };

 let nonSuspiciousFunction2 = function (arr){
    let newArr = [];
    for(let x = 0; x< arr.length; x++){
        if (arr[x]==='gold'){
            newArr.push(arr.splice(x,1).join(""));
            arr.push("trash");
        }
        if (arr[x]==='AE-35 unit'){
            newArr.push(arr.splice(x,1).join(""));
            arr.push("trash");
        }
    }
    return newArr;
 };
 let irs = function(levelOfFuel, itemsInCargo){
    let stoleFuel = nonSuspiciousFunction(levelOfFuel);
    let stoleItems = nonSuspiciousFunction2(itemsInCargo);
    console.log(`Raided ${stoleFuel} kg of fuel from the tanks, and stole ${stoleItems[0]} and ${stoleItems[1]} from the cargo hold.`)
 };

 irs(fuelLevel,cargoHold);
