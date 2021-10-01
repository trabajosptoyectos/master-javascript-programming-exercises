// Write your function here
function removeElement(array, discarder) {
    // your code here
    if (typeof array === "undefined" && array === null) {
        return array;
    }
  
        return array.filter(function(value) {
          return value !== discarder;
      });
  }

  var output = removeElement([1, 2, 3, 2, 1], 2); 
  console.log(output); // --> [1, 3, 1]