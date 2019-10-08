const Graph = require("./Graph/Graph");

let g = new Graph();
v1 = g.insertNode("ramallah");
v2 = g.insertNode("nablus");
e1 = g.insertEdge(v1, v2, 200);

console.log(v1);

console.log(g.outgoing);
