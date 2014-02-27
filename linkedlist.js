function LinkedList() {};
LinkedList.prototype = {
	length: 0,
	first: null,
	last: null
};

LinkedList.Circular = function(){};
LinkedList.Circular.prototype = new LinkedList();
LinkedList.Circular.prototype.append = function(node) {
	if (this.first === null) {
		this.prev = node;
		this.next = node;
		this.first = node;
		this.last = node;
	}
	else {
		node.prev = this.last;
		node.next = this.first;
	}
}

ll = new LinkedList.Circular();