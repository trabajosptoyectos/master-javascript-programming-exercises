var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for (var key in obj) {                    // for each key in the object
        if(typeof obj[key] == 'number')  // if the value of that key is not a NaN (is a number) and if that number is greater than num
          delete obj[key];                      // then delete the key-value from the object
      }
    
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }