function findShortestOfThreeWords(word1, word2, word3) {  let parameters = [word1, word2, word3]; let shortest = parameters[0]; 
     for ( i = 1 ; i < parameters.length ; i++ ){ if(shortest.length > parameters[i].length){ shortest = parameters[i]; } } return shortest; }
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); 