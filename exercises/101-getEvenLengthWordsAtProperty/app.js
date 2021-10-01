var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  let newArray = [];

  if (Array.isArray(obj[key]) === false || obj.hasOwnProperty(key) === false) {
  	return [];
  }
  for (let prop in obj[key]) {
  	if (obj[key][prop].length %2 === 0) {
  		newArray.push(obj[key][prop])
  	}
  }
  return newArray;
};

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']