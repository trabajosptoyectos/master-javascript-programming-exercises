function getAllKeys(obj){
  let keyArray = [];
  for (keys in obj) {
    keyArray.push(keys);
  }
  return keyArray;
}