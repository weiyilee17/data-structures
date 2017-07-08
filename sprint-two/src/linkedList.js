var linkedListNode = function (value) { // had to name it a different name to differentiate to graph's node
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    if (this.head === null) { // if list is empty
      var newNode = linkedListNode(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      var prevTail = this.tail;
      this.tail = linkedListNode(value);
      prevTail.next = this.tail;
    }
    
  };

  list.removeHead = function() {
    if (this.head === null) { // if list is empty

    } else {
      var prevHead = this.head;
      this.head = this.head.next;
      return prevHead.value;
    }
  };

  list.contains = function(target) {

    var currentNode;

    for(currentNode = this.head; currentNode !== this.tail; currentNode = currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
    }

    if (currentNode.value === target) { // for the last node in list
      return true;
    } else {
      return false;
    }

  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail : O(1)
 * removeHead : O(1)
 * contains : O(n)
 */
