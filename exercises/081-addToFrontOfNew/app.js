
function addToFrontOfNew(arr, element) {
    // Write your function here
    var oldarr = new Array();
    for (dr in arr) { 
        console.log(arr[dr]);                   // for each key in the object
        oldarr.push(arr[dr])                      // then delete the key-value from the object
      }
    console.log(oldarr);
    oldarr.unshift(element)
  
    return oldarr; 
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]