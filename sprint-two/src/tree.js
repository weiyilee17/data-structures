var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.childCount = 0;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children[this.childCount++] = Tree(value);
};

treeMethods.contains = function(target) {
  
  // var found = false;

  // if (this.value === target) {
  //   found = true;
  //   return true;
  // }

  // for (var i = 0; i < childCount; i++) {
  //   if (this.children[i].contains(target)) {
  //     found = true;
  //   }
  // }

  // return false;
  
  var found = [];

  containsInner(this, target, found);
  
  if (!found.length) {  // if we never found the value for the entire tree, we would never push
                        // thus return false
    return false;
  } else {              // if we found it somewhere, we would push true to found and found would have length
    return true;
  }

};

function containsInner(currentNode, target, array) {

  var i;
  
  // search for current node's child since the test case never adds value to root
  for(i = 0; i < currentNode.childCount; i++) {
    if (currentNode.children[i].value === target) {
      array.push(true);
      return;
    }
  }

  // go through the child and check whether the children contains the target
  for(i = 0; i < currentNode.childCount; i++) {
    containsInner(currentNode.children[i], target, array);
  }
  
}

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild : O(1)
 * contains : O(n)
 */
