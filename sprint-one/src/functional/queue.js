var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var headIndex = 0;
  var key = 0;
  // Implement the methods belowe 

  someInstance.enqueue = function(value) {
    storage[key++] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size !== 0){
      var firstValue = storage[headIndex];
      delete storage[headIndex];
      headIndex ++;
      size --;
      
      return firstValue;
    }
  };

  someInstance.size = function() { 
    return size;
  };

  return someInstance;
};
