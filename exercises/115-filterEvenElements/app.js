
function filterEvenElements(arr) {
	var result = [];
	arr.filter(function (num){
		if (num % 2 === 0){
			result.push(num);
		}
	});
	return result;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
