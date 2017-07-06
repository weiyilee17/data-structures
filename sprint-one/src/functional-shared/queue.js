var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.sizeOfQueue = 0;
  someInstance.headIndex = 0;
  someInstance.key = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.key++] = value;
  this.sizeOfQueue++;
}

queueMethods.dequeue = function() {
  if (this.sizeOfQueue) {
    var firstPropertiesValue = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.headIndex++;
    this.sizeOfQueue--;
    return firstPropertiesValue;
  }
}

queueMethods.size = function() {
  return this.sizeOfQueue;
}
