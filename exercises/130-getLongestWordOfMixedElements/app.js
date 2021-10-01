function getLongestWordOfMixedElements(arr) {
    var ans =""
    var longest =0
    for ( var i =0; i<arr.length; i++)
    {
      if (typeof arr[i] === "string")
          {
            if (arr[i].length > longest)
            {
              ans = arr[i]
              longest = arr[i].length
            }
          }
    }
  return ans
  }

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'