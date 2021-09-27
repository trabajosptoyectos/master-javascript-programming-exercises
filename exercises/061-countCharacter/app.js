function countCharacter(str, char) {
    // your code here
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == char) {
            count += 1;
        }
    }
    return count;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output);