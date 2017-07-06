var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.sizeOfQueue = 0;
  someInstance.headIndex = 0;
  someInstance.key = 0;
  // key exists for dequeue

  // Implement the methods belowe 

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.key++] = value;
    someInstance.sizeOfQueue++;
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

    if (someInstance.sizeOfQueue) {
      var firstPropertiesValue = someInstance.storage[someInstance.headIndex];
      delete someInstance.storage[someInstance.headIndex];
      someInstance.headIndex++;
      someInstance.sizeOfQueue--;
      
      return firstPropertiesValue;
    }
  };

  someInstance.size = function() { 
    return someInstance.sizeOfQueue;
  };

  return someInstance;
};
