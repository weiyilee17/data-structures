var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var headIndex = 0;
  var key = 0;
  // key exists for dequeue

  // Implement the methods belowe 

  someInstance.enqueue = function(value) {
    storage[key++] = value;
    size++;
  };

  someInstance.dequeue = function() {

    // after enqueueing, strorage should look something like th is:
    // {
    //   0 : 'a',
    //   1 : 'b',
    //   2 : 'c',
    //   ...
    //   98: 'a',
    //   99: 'b',
    //   ...
    // }
    // we deque 0 : 'a', but if we then enqueue, if we use size, it will overwrite
    // the last property than making a new one due to the decrease of the size
    // so we have an independent varaible key that is independent to size
    // when we dequeue we remove 0, 1, 2... and enqueue we add 97, 98, 99...

    if (size) {
      var firstPropertiesValue = storage[headIndex];
      delete storage[headIndex];
      headIndex++;
      size--;
      
      return firstPropertiesValue;
    }
  };

  someInstance.size = function() { 
    return size;
  };

  return someInstance;
};
