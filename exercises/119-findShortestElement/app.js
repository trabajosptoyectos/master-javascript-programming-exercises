function findShortestElement(arr) {
    var ansArr =[]
    var shortest= arr[0].length
    for (var i =0; i<arr.length; i++)
    {
      if(arr[i].length < shortest)
      {
        shortest=arr[i].length
        ansArr=[]
        ansArr.push(arr[i])
      }
      else if (arr[i].length === shortest)
      {
        ansArr.push(arr[i])
      }
    }
    return ansArr[0]
  }
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'