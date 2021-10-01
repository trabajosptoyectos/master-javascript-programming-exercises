function modulo(num1, num2) {
    if(isNaN(num1) || isNaN(num2) || num2 === 0) {
      return NaN;
    }
    if (num1 === -1) {
      return -1;
    }
    if (num1 < 0) {
      num1 = Math.abs(num1);
      num2 = Math.abs(num2);
      return -modulo(num1 - num2, num2);
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    if (num1 === 0) {
      return 0;
    } else if (num2 > num1) {
      return num1;
    } else {
      return modulo(num1 - num2, num2);
    }
  }

var output = modulo(25, 4);
console.log(output); // --> 1