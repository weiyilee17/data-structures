var Set = function() {
  var set = Object.create(Set.prototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

Set.prototype.add = function(item) {
  if (this.contains(item)) { // if string is already in set, do nothing

  } else {  // only add when it is unique
    this._storage.push(item);
  }
};

Set.prototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

Set.prototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
};

Set.prototype.getLength = function() {
  return this._storage.length;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
