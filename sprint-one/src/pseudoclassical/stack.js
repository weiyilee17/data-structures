var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.sizeOfStack = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.sizeOfStack++] = value;
}

Stack.prototype.pop = function() {

  if (this.sizeOfStack) {
    var lastPropertiesValue = this.storage[this.sizeOfStack - 1];
    delete this.storage[this.sizeOfStack];
    this.sizeOfStack--;
    return lastPropertiesValue
  }
}

Stack.prototype.size = function() {
  return this.sizeOfStack;
}
