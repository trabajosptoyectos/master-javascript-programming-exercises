var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
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
     console.log(obj[key]);
    const squares = obj[key].map(x => x * x);
        return squares;
  }


}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]