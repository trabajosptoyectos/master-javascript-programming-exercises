// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    // your code here
    
    if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0) {
      return [];
    }
    
       var output =obj[key].filter(function(element) {
        return element.length % 2 !== 0;
      });
      
      return output;
    }

    var obj = {
        key: ['It', 'has', 'some', 'words']
      };
      var output = getOddLengthWordsAtProperty(obj, 'key');
      console.log(output);

