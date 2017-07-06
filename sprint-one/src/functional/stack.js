var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeOfStack = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[sizeOfStack++] = value;
  };
  
  someInstance.pop = function() {
    // only pop when object has properties
    if (sizeOfStack) {
      var lastPropertiesValue = storage[sizeOfStack - 1];
      delete storage[sizeOfStack];
      sizeOfStack--;
      return lastPropertiesValue;
    }
  };

  someInstance.size = function() {
    return sizeOfStack;
  };

  return someInstance;
};

