function getLengthOfLongestElement(arr) {
    // your code here
    var currLength = 0;
    //var maxIndex = -1;
    if (arr.length === 0) {
      return 0;
    }
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > currLength) {
        currLength = arr[i].length;
        //maxIndex = i;
      }
    }
    return currLength;
  }

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5