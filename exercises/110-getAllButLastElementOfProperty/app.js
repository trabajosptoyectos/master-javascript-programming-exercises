var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key]) && obj[key].length >0))
   {
     arr = obj[key]
     return arr.slice(0, arr.length-1)
   }
   else return []
 }

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]