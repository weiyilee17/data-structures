var BinarySearchTree = function(value) {
   var node = Object.create(methods)
   node.value = value;
   node.left = null;
   node.right = null;
   
   return node;
};

var methods = {};

methods.insert = function(newValue) {

   if(newValue <= this.value) {

      if(this.left) {
         return this.left.insert(newValue);
      } else {
         this.left = BinarySearchTree(newValue);
      }

   } else { // new value > current parrent node's value
      if(this.right) {
         return this.right.insert(newValue);
      } else {
         this.right = BinarySearchTree(newValue);
      }
   }

};

methods.contains = function(target) {

   if(target === this.value) {
      return true;
   } else if(target < this.value) {

      if(this.left) {
         return this.left.contains(target);
      } else {
         return false;
      }

   } else { // target > this.value

      if(this.right) {
         return this.right.contains(target);
      } else {
         return false;
      }
   }
};

methods.depthFirstLog = function(iterator) {

  // pre order : parent, left, right

   iterator(this.value);

   if(this.left) {
      this.left.depthFirstLog(iterator);
   }

   if(this.right) {
      this.right.depthFirstLog(iterator);
   }

}

methods.min = function () {

  if(this.left) {
    return this.left.min();
  } else {
    return this.value;
  }

}

methods.max = function () {

  if(this.right) {
    return this.right.max();
  } else {
    return this.value;
  }

}
/*
 * Complexity: What is the time complexity of the above functions?
 * insert : O(log(n))
 * contains : O(log(n))
 * depthFirstLog : O(log(n))
 */
