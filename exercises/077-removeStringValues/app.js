function removeStringValues(obj) {
    // your code here
    for (var key in obj) {                    // for each key in the object
        if(typeof obj[key] == 'string')  // if the value of that key is not a NaN (is a number) and if that number is greater than num
          delete obj[key];                      // then delete the key-value from the object
      }
}

var obj = {
    name: 'Sam',
    age: 20
  }
  removeStringValues(obj);
  console.log(obj);