// Write your function here
function getLastElementOfProperty(obj, key) {
    // your code here
    var keys = Object.keys(obj);
    
    if (!(keys.includes(key))) {
        return value;
    }else if (obj[key].constructor == Array){
        var value = obj[key][obj[key].length - 1];
        return value;
    }
  }
  var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5