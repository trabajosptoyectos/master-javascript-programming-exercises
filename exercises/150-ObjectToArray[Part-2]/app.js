function listAllValues(obj)
 {
   var ans =[];
   for(var k in obj) {
     ans.push(obj[k]);
   }
  return ans
}