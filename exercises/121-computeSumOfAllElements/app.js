function computeSumOfAllElements(arr) {
  var sum =0
  for (var i =0; i<arr.length; i++)
  {
    sum += arr[i]
  }
return sum
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6