function flipEveryNChars(input, n) {
    // your code here
    return new Array(n + 1).join( input );
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma