function iterativelist(accumulated, current) {
	if (current.tail == null) {
		accumulated = { head: current.head, tail: accumulated};
		return accumulated;
	}
	else {
		accumulated = {
			head: current.head,
			tail: accumulated
		}
		return iterativelist(accumulated, current.tail);
	}
}

function reverse(list) {
	return iterativelist(null, list);
}

lst = { head: 1, tail: { head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } } };

console.log(reverse(lst));