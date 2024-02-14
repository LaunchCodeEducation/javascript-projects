function processor(transmission) {
    let id, rawData;
    transmission = transmission.trim();
    let arr = transmission.split('');
    let count = 0;
    //console.log("transmission.split['']: ", arr);
    arr.forEach(element => {
        console.log("Element: ", element);
        if(element === ':'){
            console.log('one');
            count += 1;
        }
    });
    if(count !== 1){
        return -1;
    }
    else{
        [id, rawData] = transmission.split('::');
        console.log("Number(id) == NaN: ", Number(id) === NaN);
        Number.isNaN(Number(id)) ? (id = -1) : (id = Number(id));
        (rawData[0] === '<' && rawData[rawData.length-1] === '>') ? null : rawData = -1 ;
    }
    return {id , rawData};
 }

 console.log(processor("8976::<dhjdfgdh>"));

 module.exports = processor;