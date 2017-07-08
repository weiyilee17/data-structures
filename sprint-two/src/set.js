var Set = function() {
  var set = Object.create(Set);
  set._storage = [];
  return set;
};

var setPrototype = {};

Set.add = function(item) {
  if (this.contains(item)) { // if string is already in set, do nothing

  } else {  // only add when it is unique
    this._storage.push(item);
  }
};

Set.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

Set.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
