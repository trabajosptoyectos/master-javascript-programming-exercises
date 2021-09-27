function removeFromBackOfNew(arr) {
  // your code here
  arr.pop();
  return arr;
}

var arr1 = [1, 2, 3];
var output = removeFromBackOfNew(arr1);
console.log(output); // --> [1, 2]
console.log(arr1); // --> [1, 2, 3]