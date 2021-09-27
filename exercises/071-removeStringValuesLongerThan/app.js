var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (var key in obj) { 
      console.log(String(obj[key]).length);              
      if(String(obj[key]).length > num){
        console.log("delete")
          delete obj[key]
      }
          

    }

}


removeStringValuesLongerThan(6, obj);
console.log(obj);
