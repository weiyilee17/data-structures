

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage.get(index) === undefined) {  // if this bucket is empty
    var bucket = [];
    var tuple = [];

    tuple.push(k, v);
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {  // if the bucket has value already
    var tuple = [];

    tuple.push(k, v);

    // loop through the array first and check for same keys
    for(var i  = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) { // if there is a same key
        this._storage.get(index)[i][1] = v; // overwrite the value
        return;
      }
    }
    this._storage.get(index).push(tuple);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    return undefined;
  }

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].pop();  // pop the value
      bucket[i].pop();  // pop the key
      // or bucket.splice(i, 1) i is positon to start, and 1 element to cut off
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * 
 */
