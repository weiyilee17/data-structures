var Node = function(value) {
   this.value = value;
   this.connections = [];
}

// Instantiate a new graph
var Graph = function() {
   this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
   var newNode = new Node(node);
   this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
   for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === node) {
         return true;
      }
   }
   return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
   var i;
   // remove edges before remove node
   for (i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === node) {
         for (var j = 0; j < this.nodes[i].connections.length; j++) {
            this.removeEdge(this.nodes[i].connections[j], node);
         }
      }
   }

   for (i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === node) {
         this.nodes.splice(i, 1);
      }
   }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

   for (i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode){
         for (var j = 0; j < this.nodes[i].connections.length; j++){
            if (this.nodes[i].connections[j] === toNode){
               return true;
            }
         }
      }
   }

   return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

   var i;
   var outsideScope = this;
   var plusEdge = function(from, to){
     for (i = 0; i < outsideScope.nodes.length; i++) {
       if (outsideScope.nodes[i].value === from){
          outsideScope.nodes[i].connections.push(to);
        }
      }
    }
    plusEdge(fromNode, toNode);
    plusEdge(toNode, fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
   var i;
   var j;
   var outsideScope = this;

  var edgeDelete = function(from, to){
    for (i = 0; i < outsideScope.nodes.length; i++) {
      if (outsideScope.nodes[i].value === from){
         for (j = 0; j < outsideScope.nodes[i].connections.length; j++){
            if (outsideScope.nodes[i].connections[j] === to){
               outsideScope.nodes[i].connections.splice(j, 1);
            }
         }
      }
   }
 }
 edgeDelete(fromNode, toNode);
 edgeDelete(toNode, fromNode);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
   for (var i = 0; i < this.nodes.length; i++) {
      cb(this.nodes[i].value);
   }
};

Graph.prototype.getNodeNum = function () {
  return this.nodes.length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNodes : O(1)
 * contains : O(n)
 * removeNode : O(n^4)
 * hasEdge : O(n^2)
 * addEdge : O(n)
 * removeEdge : O(n^2)
 * forEachNode : O(n) 
 * getNodeNum : O(1)
 */
