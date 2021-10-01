// Write your function here
function keep(array, keeper) {
    if(Array.isArray(array) === false){
     return null;
   }
      return array.filter(function(value) {
         return value == keeper;
     });
 }
 var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);