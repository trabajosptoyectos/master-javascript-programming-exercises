
function isRotated(str1,  str2)
{
   /* Check if sizes of two strings are same */
   if (str1.length != str2.length)
        return false;
 
   var temp = str1 + str1;
   
  return (temp.find(str2));
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false