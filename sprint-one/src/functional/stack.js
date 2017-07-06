var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size++] = value;
  };
  
  someInstance.pop = function() {
    // only pop when object has properties
    if (size){
      var lastPropertiesValue = storage[size - 1];
      delete storage[size];
      size--;
      return lastPropertiesValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

