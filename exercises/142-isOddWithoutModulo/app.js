function isOddWithoutModulo(num) {
    // your code here
    var value = num/2;
    if(!Number.isInteger(value)) {
      return true;
    }
    return false;
  };
var output = isOddWithoutModulo(17);
console.log(output); // --> true