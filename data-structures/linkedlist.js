var LinkedList = function() {
	var Node = function(data) {
		this.next = null,
		this.value = data
	};

	var constructor = function() {
		this.length = 0;
		this.head = null;
		this.next = null;
	};

	constructor.prototype.empty = function() {
		return this.length === 0
	};

	constructor.prototype.size = function() {
		return this.length;
	};

	constructor.prototype.push = function(element) {
		var node = new Node(element);

		if (this.head === null) {
			this.head = node;
		}
		else {
			// Point to the previous head
			node.next = this.head;

			// Change the head to this node
			this.head = node;
		}
		this.length++;
	};

	constructor.prototype.pop = function(index) {
		// get to the index and pop off, change the pointers
		if (index > this.length) { return null; }

		var previous = null;
		var node = this.head;
		var i = 0;
		while (node !== null && i < index ) {
			previous = node;
			node = node.next;
			i++;
		}
		if (node == null) { return null; }
		previous.next = node.next;
		this.length--;
		return node.value;
	};

	constructor.prototype.isElement = function(element) {
		var node = this.head;
		while(node !== null) {
			if (node.value === element) {return true;}
			node = node.next;
		}
		return false;
	}

	constructor.prototype.list = function() {
		var node = this.head;
		while(node !== null) {
			console.log(node.value);
			node = node.next;
		}
	}
	return new constructor();

};

module.exports.LinkedList = LinkedList;

linked = new LinkedList();

// push an element onto the list
linked.push(5);

linked.push(1);
console.log("Is empty? " + linked.empty());
console.log("Size: " + linked.size());
console.log("All items: ");
console.log(linked.list());
console.log("Does list have 5? " + linked.isElement(5));
console.log("Does list have 12? " + linked.isElement(12));
console.log("Pop at index 3(should be 15): " + linked.pop(2));
console.log("All items: ")
console.log(linked.list());
console.log("Size: " + linked.size());
