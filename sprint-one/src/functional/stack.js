var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.sizeOfStack = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.sizeOfStack++] = value;
  };
  
  someInstance.pop = function() {
    // only pop when object has properties
    if (someInstance.sizeOfStack) {
      var lastPropertiesValue = someInstance.storage[someInstance.sizeOfStack - 1];
      delete someInstance.storage[someInstance.sizeOfStack];
      someInstance.sizeOfStack--;
      return lastPropertiesValue;
    }
  };

  someInstance.size = function() {
    return someInstance.sizeOfStack;
  };

  return someInstance;
};

