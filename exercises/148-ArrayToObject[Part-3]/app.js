function transformEmployeeData(array) {

  var collection = [];
  for(var i = 0; i < array.length; i++){
    var obj = {};
    var dataArray =array[i];
    for(var j= 0; j < array[i].length; j++){
      obj[dataArray[j][0]] = dataArray[j][1]
         
    }
    collection.push(obj);
  }
  return collection;

}