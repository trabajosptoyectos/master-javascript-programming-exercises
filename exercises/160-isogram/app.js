function isIsogram(string){
  var str = string.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  if(str == null){
  return true} else{
  return false;
  }
  }

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false