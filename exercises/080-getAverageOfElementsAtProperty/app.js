// Write your function here

function getAverageOfElementsAtProperty(obj, key) {
    // your code here
    var sum = obj[key].reduce((a, b) => a + b, 0);
    var avg = (sum / obj[key].length) || 0
    return avg

  }
var obj = {
    key: [1, 2, 3]
  };
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);

