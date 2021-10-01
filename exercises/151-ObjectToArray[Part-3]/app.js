function convertObjectToList(obj) {
  // your code here
  return Object.keys(obj).map(e => [e, obj[e]])
}