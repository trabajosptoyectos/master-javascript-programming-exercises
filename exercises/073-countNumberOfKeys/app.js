function countNumberOfKeys(obj) {
    // your code here
    return Object.keys(obj).length

}

var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output);