// Write your function here
function findMaxLengthOfThreeWords(str1,str2,str3){


    var s = str1 + " " + str2 + " " + str3;
    
    return Math.max(...s.split(' ').map(word => word.length));


}


var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);