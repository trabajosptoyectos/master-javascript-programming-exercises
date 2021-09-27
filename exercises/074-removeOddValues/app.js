function removeOddValues(obj) {
    // your code here
    for (var key in obj) {                    // for each key in the object
        if(obj[key] % 2 === 1)  // if the value of that key is not a NaN (is a number) and if that number is greater than num
          delete obj[key];                      // then delete the key-value from the object
      }
}
var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj);