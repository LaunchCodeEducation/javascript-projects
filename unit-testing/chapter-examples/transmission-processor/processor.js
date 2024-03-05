function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
     }
     let countColon=0;
     for (let i=0;i<transmission.length;i++)
     {
        if(transmission[i]===":")
            countColon++;
     }
     if (countColon>2)
     {
        return -1;
     }
     let parts = transmission.trim().split("::");
     
     
     let rawData = '';
     rawData=parts[1];

     
     if( (rawData[0] !== "<") ||  (rawData.indexOf(">") !== rawData.length-1)  ||
     (rawData.indexOf("<")!== 0) )
      {
        rawData = -1;        
     }

     let count=0;
     for (let i=0;i<rawData.length;i++)
     {
        if(rawData[i]==="<")
        count++;
     }
     if (count>1)
     {
        rawData = -1;
     }
     if (isNaN(Number(parts[0])))
     {
        rawData=-1;
     }
     return {
        id: Number(parts[0]),
        rawData: rawData
     };
     
 }

 console.log(processor("9701::<487297403495720912>"))

 module.exports = processor;
 