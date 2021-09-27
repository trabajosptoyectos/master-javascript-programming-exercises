function convertDoubleSpaceToSingle(str) {
    // your code here
    var string = str.replace(/  +/g, ' ');
    return string
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"