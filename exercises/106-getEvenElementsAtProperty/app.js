
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  // your code here
console.log(obj);
  if(Object.prototype.toString.call(obj[key] ) !== '[object Array]')  
    {
        console.log("Obj key is "+Object.prototype.toString.call(obj[key]));
      return [];
    }
  else if(!obj[key])
  {
  console.log("Property not present at " + obj[key])
    return [];
  }
  else if(obj[key].length===0)
  {
    return [];
  }
  else{
    let retarr = [];
    console.log(obj[key]);
 obj[key].forEach(function(ele){
     if(ele%2===0)
       {
         console.log(ele);
         return retarr.push(ele);
       }
     else
       {
         return [];
       }
     
   });
    return retarr;
  }

}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]