function SortedtoBST(list) {

	var mid = Math.floor(list.length/2);


	var root = new Node(list[mid]);

	if (mid == 0) {
		return root;
	}
	// else if ()
	else {
		left_list = list.splice(0,mid);
		right_list = list.splice(mid);
		root.left = SortedtoBST(left_list);
		root.right = SortedtoBST(right_list);
	}
	console.log(root);
}

var Node = function(value) {
	return {
		value: value,
		left: null,
		right: null
	}
};

list = [1,3,5,7,9];

console.log(SortedtoBST(list));
