function transformFirstAndLast(array) {
  // your code here
  var myObject = {}
  array.forEach(function(){
  myObject[array[0]] = array[array.length-1]}
  )
  return myObject
}

transformFirstAndLast(['Houssein', 'Abil', 'Loukman', 'Queen'])