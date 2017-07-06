var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.sizeOfQueue = 0;
  this.headIndex = 0;
  this.key = 0;




};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key++] = value;
  this.sizeOfQueue++;
}

Queue.prototype.dequeue = function() {
  
  if (this.sizeOfQueue) {
    var firstPropertiesValue = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.headIndex++;
    this.sizeOfQueue--;

    return firstPropertiesValue;
  }
}

Queue.prototype.size = function() {
  return this.sizeOfQueue;
}