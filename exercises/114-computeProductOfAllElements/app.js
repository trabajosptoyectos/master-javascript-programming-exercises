function computeProductOfAllElements(arr) {
    if (arr.length >0){
    var product =1
    for (var i =0; i<arr.length; i++)
    { 
      product *= arr[i]
    }
      return product
    }
    else return 0
  }

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60