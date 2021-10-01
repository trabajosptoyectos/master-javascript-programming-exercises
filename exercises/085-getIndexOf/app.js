// Write your function here
function getIndexOf(char, str) {
    for (var i = 0; i < str.length; i++) {          // Loop through the string
        if (str[i] === char) {                      // If the array index matches the char
            return i;                               // If true, return the i, which is the index count
        }
     }
     return -1;                                     // If no match, loops ends and return a -1
}

var output = getIndexOf('a', 'I am a hacker');

console.log(output);

