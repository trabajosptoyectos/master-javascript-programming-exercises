// Write your function here
function computeAverageOfNumbers(nums) {
    if (nums.length == 0) return 0;
    var total = 0;
    for (var i = 0; i < nums.length; i++){
      total += nums[i];
    }
    var avg = total / nums.length;
    return avg;
  }
  var input = [1,2,3,4,5];
  var output = computeAverageOfNumbers(input);
  console.log(output);
