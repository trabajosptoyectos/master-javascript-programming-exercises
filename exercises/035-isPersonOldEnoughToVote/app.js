function isPersonOldEnoughToVote(person) {
  // tu codigo aqui

  if (person['age'] >= 18){
    return true;
  }
  else{
    return false;
  }
}

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output);