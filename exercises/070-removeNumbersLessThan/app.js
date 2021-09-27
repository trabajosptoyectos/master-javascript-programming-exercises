var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for (var key in obj) {                    // for each key in the object
        if(!isNaN(obj[key]) && obj[key] < num)  // if the value of that key is not a NaN (is a number) and if that number is greater than num
          delete obj[key];                      // then delete the key-value from the object
      }
}

removeNumbersLessThan(5, obj);
console.log(obj);
