var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.sizeOfStack = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeOfStack++] = value;
}

stackMethods.pop = function () {
  if (this.sizeOfStack) {
    var lastPropertiesValue = this.storage[this.sizeOfStack - 1];
    delete this.storage[this.sizeOfStack - 1];
    this.sizeOfStack--;
    return lastPropertiesValue;
  }
}

stackMethods.size = function () {
  return this.sizeOfStack;
}
