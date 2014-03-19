function quicksort(array) {
	if (array.length <= 1) {
		return array;
	}

	var pivot = array[0];
	var left = [];
	var right = [];

	for (var i = 1; i < array.length; i++) {
		if (array[i] <= pivot) {
			left.push(array[i]);
		}
		else {
			right.push(array[i]);
		}
	}

	return quicksort(left).concat(pivot, quicksort(right));
}

var ar = [1,9,5,3,2,7];

console.log(quicksort(ar));