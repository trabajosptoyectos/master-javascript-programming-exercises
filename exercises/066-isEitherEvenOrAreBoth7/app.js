function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return (num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7);
    
}

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output);
