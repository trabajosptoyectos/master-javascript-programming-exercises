// Write your function here

function findMinLengthOfThreeWords(str1,str2,str3){


    var s = str1 + " " + str2 + " " + str3;
    
    return Math.min(...s.split(' ').map(word => word.length));


}


var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);