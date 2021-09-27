function addToBack(arr, element) {
  // your code here
  let oldarr = arr;
    oldarr.push(element)
  
    return oldarr; 
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]