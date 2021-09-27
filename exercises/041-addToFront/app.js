function addToFront(arr, element) {
  // your code here

    let oldarr = arr;
    oldarr.unshift(element)
  
    return oldarr; 
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift