function mergesort(list) {
  if (list.length <= 1) {
    return list;
  }
  var left  = [],
      right = [],
      mid   = Math.floor(list.length / 2);
  for (var i = 0; i < mid; i ++) {
    left.push(list[i]);
  }
  for (var i = mid; i < list.length; i++) {
    right.push(list[i]);
  }
  var left_sorted = mergesort(left);
  var right_sorted = mergesort(right);
  return left.concat(right);
}

lst = [1,6,2,5,3,8,4,7,9]
console.log(mergesort(lst));
