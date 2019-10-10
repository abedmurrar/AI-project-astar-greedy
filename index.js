const Graph = require('./Graph/Graph');

let g = new Graph();
let v1 = g.insertNode('ramallah');
let v2 = g.insertNode('nablus');
let e1 = g.insertEdge(v1, v2, 200);

console.log(v1);

console.log(g.outgoing);
