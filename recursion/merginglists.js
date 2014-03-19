
function Merge(list1, list2) {
	var list = {};
	if (list1 == null || list2 == null) {
		return list1 || list2;
	}
	// base case is one list

	if (list1.head < list2.head) {
		list.head = list1.head;
		list.tail = Merge(list1.tail, list2);
		return list;
	}
	else if (list1.head > list2.head) {
		list.head = list2.head;
		list.tail = Merge(list2.tail, list1);
		return list;
	}
	else {
		list.head = list1.head;
		list.tail = Merge(list1.tail, list2.tail);
		return list;
	}
}

// 1) input: null, { head: 1, tail: null}  
//    output: { head: 1, tail: null}

// 2) input:  { head: 1, tail: null}, { head: 1, tail: null}
//    output: { head: 1, tail: null}

// 3) input:  { head: 2, tail: null}, { head: 1, tail: null}
//    output: { head: 1, tail: head: 2, tail: null}}

// 4) input: { head: 2, tail: null }, { head: 1, tail: { head: 3, tail: null } }
//    output: { head: 1, tail: { head: 2, tail: { head: 3, tail: null } } }

console.log(Merge(null, {head:1, tail: null}));
console.log(Merge({head:1, tail:null}, {head:1, tail:null}));
console.log(Merge({head:2, tail:null}, {head:1, tail:null}));
console.log(Merge({head:2, tail:null}, {head:1, tail:{head:3, tail:null}}));