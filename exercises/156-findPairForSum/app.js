
function findPairForSum(arr, S) {

    var sums = [];
  
    // check each element in array
    for (var i = 0; i < arr.length; i++) { 
  
      // check each other element in the array
      for (var j = i + 1; j < arr.length; j++) {
  
        // determine if these two elements sum to S
        if (arr[i] + arr[j] === S) {
          sums.push([arr[i], arr[j]]);
        }
  
      }
  
    }
  
    // return all pairs of integers that sum to S
    return sums;
  
  }

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]