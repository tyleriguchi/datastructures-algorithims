var SortedToBST = function(list) {
	var node = {}

	if (list === null) {
		return list;
	}
	else if (list.length === 1) {
		node.root = list[0];
		node.left = null;
		node.right = null;
		return node;
	}
	else if (list.length === 2) {
		node.root = list[1];
		node.left = list[0];
		node.right = null;
		return node;
	}
	else {
		var mid = Math.floor(list.length/2);
		var left_list = list.slice(0, mid);
		var right_list = list.slice(mid+1);
		node.root = list[mid];
		node.left = SortedToBST(left_list);
		node.right = SortedToBST(right_list);
		return node;
	}
}

module.exports.SortedToBST = SortedToBST;

// var list = [1,3,5,7,9,10,15,17];
// console.log(SortedToBST(list));
