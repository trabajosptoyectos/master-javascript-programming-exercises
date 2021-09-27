function addToBackOfNew(arr, element) {
    // Write your function here
    var oldarr = new Array();
    for (dr in arr) { 
        console.log(arr[dr]);                   // for each key in the object
        oldarr.push(arr[dr])                      // then delete the key-value from the object
      }
    console.log(oldarr);
    oldarr.push(element)
  
    return oldarr; 
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]