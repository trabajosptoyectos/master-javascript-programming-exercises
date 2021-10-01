function filterOddLengthWords(array1) {
    // your code here
    var newArray = [];
  for (var i = 0; i < array1.length; i++){
    if (array1[i].length % 2 === 1){
      newArray.push(array1[i]);
    }
  }
  return newArray;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']