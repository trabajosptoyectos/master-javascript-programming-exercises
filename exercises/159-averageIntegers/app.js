function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce(function(sum, numbers) {
    return sum += numbers;
  }, 0);
}
var numbers = [1, 2, 3];
console.log(average(numbers));


function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('TEST FAILED [' + testName + ']: expected ' + expected + ' but got, ' + actual + '');
  }
}

assertEquals(sum([2, 4, 6]), 12, 'numbers should sum correctly');
assertEquals(average([2, 4, 6]), 4, 'should compute average of numbers');
assertEquals(sum([2, 4, 7]), 12, 'number should sum correctly');
assertEquals(average([2, 5, 6]), 4, 'should compute average of numbers');