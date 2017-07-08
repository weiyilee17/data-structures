var LinkedListNode = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.allNodeValues = [];  // array contains values of linkedList

  list.addToTail = function(value) {

    if (this.head === null) { // if list is empty
      var newNode = LinkedListNode(value);
      this.head = newNode;
      this.tail = newNode;
      this.allNodeValues.push(newNode.value);
    } else {
      var prevTail = this.tail;
      this.tail = LinkedListNode(value);
      this.allNodeValues.push(this.tail.value);
      prevTail.next = this.tail;
    }

  };

  list.removeHead = function() {
    if (this.head === null) { // if list is empty

    } else {  // else if the list isn't empty
      var prevHead = this.head;
      this.head = this.head.next;
      this.allNodeValues.shift(); // get rid of the first element in the array (remove head)
      return prevHead.value;
    }
  };

  list.contains = function(target) {

    // after allNodeValues

    for(var i = 0; i < this.allNodeValues.length; i++) {
      if (this.allNodeValues[i] === target){
        return true;
      }
    }

    return false;

    // before adding allNodeValues

    // var currentNode;
    //
    // for(currentNode = this.head; currentNode !== this.tail; currentNode = currentNode.next) {
    //   if (currentNode.value === target) {
    //     return true;
    //   }
    // }
    //
    // if (currentNode.value === target) { // for the last node in list
    //   return true;
    // } else {
    //   return false;
    // }
  };

  list.getElementsBetweenIndex = function (startIndex, endIndex) {

    if (startIndex === endIndex) {
      return [];  // slice(0, 0 + 1) would return an array with the first element
    } else {
      // +1 for the last element because slice doesn't include the endIndex
      return this.allNodeValues.slice(startIndex, endIndex + 1);
    }

  }

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail : O(1)
 * removeHead : O(1)
 * contains : O(n)
 */
