function getLongestElement(arr) {
    var ansArr =[]
    var longest = arr[0].length
    for ( var i =0; i<arr.length; i++)
    {
      if(arr[i].length > longest)
      {
        longest = arr[i].length
        ansArr=[]
          ansArr.push(arr[i])
      }
      else if ( arr[i].length === longest)
      {
        ansArr.push(arr[i])
      }
    }
    return ansArr[0]
  }
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'