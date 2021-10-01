function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0,3) + ')' 
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}

console.log(createPhoneNumber([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]));