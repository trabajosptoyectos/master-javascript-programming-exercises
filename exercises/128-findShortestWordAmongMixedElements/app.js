function findShortestWordAmongMixedElements(arr) {
    var result =""
    var short = 1000
    for (var i =0; i<arr.length; i++)
    {
      if (typeof arr[i] === "string")
      {
        if(arr[i].length <short)
        {
          short = arr[i].length
          result = arr[i]
        }
      } 
    }
      return result
  }
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'