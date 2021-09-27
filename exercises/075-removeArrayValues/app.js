function removeArrayValues(obj) {
    // your code here
    for (var key in obj) {                    // for each key in the object
        if(Array.isArray(obj[key]))  // if the value of that key is not a NaN (is a number) and if that number is greater than num
          delete obj[key];                      // then delete the key-value from the object
      }
}
var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); 