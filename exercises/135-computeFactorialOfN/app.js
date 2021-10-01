function computeFactorialOfN(num) {
    var factorial = 1;  // create placeholder number (start with 0 since we're multiplying)
    for (let i = 1; i <= num; i++) {  // for loop (start with 1, end at num)
      factorial *= i;  // multiply each iteration to placeholder number
    }
    return factorial;
  }

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24