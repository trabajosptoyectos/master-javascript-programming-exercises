function filterEvenLengthWords(arr) {  // HoF
    return arr.filter(function(i) {  // filters even length elements to its own array
      return i.length % 2 === 0;
    });
  }

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']