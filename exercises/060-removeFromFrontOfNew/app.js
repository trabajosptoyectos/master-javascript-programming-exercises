function removeFromFrontOfNew(arr) {
    // your code here
    arr.shift();
    return arr;
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr);