var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  //set array inside given key to a variable
  var arrayInsideObject = obj[key];

  //if array is empty, or property at given key not an array, or no property at key
  if (arrayInsideObject === undefined || !(Array.isArray(arrayInsideObject)) || arrayInsideObject.length < 1){
    return undefined;  
  }

  //return the smallest element at property (array at given key)
  //method 1:
  return Math.min.apply(null, arrayInsideObject);
  //or method 2: (only in ES6)
  // return Math.min(...arrayInsideObject);
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1