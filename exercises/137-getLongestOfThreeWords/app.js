function getLongestOfThreeWords(word1, word2, word3) {
    let wordsArr = [word1, word2, word3];
    let longestWord = '';
    
    for (var i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].length > longestWord.length) {
        longestWord = wordsArr[i];
      } 
    }
    return longestWord;
  }

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'