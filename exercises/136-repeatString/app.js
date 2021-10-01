function repeatString(str, num) {
    var newStr = '';  // placeholder string
    for (let i = 0; i < num; i++) {  // use forloop (start at 0, end at num, i++)
      newStr = newStr.concat(str);  // concat the string to placeholder string every iteration
    }
    return newStr;
  }

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'