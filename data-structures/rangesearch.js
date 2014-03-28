var sortBST = require('./sortedarraytobst').SortedToBST;

var rangeSearch = function(bst, low, high) {
  var arr = [];
  if (bst == null ) { return []; }
  if ( bst.left == null && bst.right == null) {
    if ( bst.root > low && bst.root < high ) {
      arr.push(bst.root);
      return arr;
    }
    else {
      // console.log(bst.root);
      return [];
    }
  }
  else {
    var left = rangeSearch(bst.left, low, high);
    console.log(left);
    var right = rangeSearch(bst.right, low, high);
    console.log(right);
    if (bst.root > low && bst.root < high) {
      return left.concat(bst.root, right);
    }
    else {
      return left.concat(right);
    }
  }
}
var bst = sortBST([1,3,5,7,9,10,12,15,16,20,36,50,61]);
console.log(bst);
console.log(rangeSearch(bst, 1, 61));
