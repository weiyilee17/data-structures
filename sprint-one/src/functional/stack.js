var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keys = Object.keys(storage);  
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size++] = value;
  };
  
  someInstance.pop = function() {
    if (size !== 0){
         var lastPropsValue = storage[size-1];
         delete storage[size];
         size--;
         return lastPropsValue;
       }
  };

  someInstance.size = function() {
    return size;
  
  };

  return someInstance;
};

