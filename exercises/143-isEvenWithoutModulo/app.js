function isEvenWithoutModulo(x) {
    return ( x & 1 ) ? "odd" : "even";
} 
var output = isEvenWithoutModulo(8);
console.log(output); // --> true