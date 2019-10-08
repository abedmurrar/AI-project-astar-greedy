const GraphNode = require("./GraphNode");
const Edge = require("./Edge");

class Graph {
  constructor(directed = false) {
    this.outgoing = new Map();
    this.incoming = directed ? new Map() : this.outgoing;
  }

  get isDirected() {
    return this.incoming !== this.outgoing;
  }

  get nodesCount() {
    return this.outgoing.size;
  }

  get nodes() {
    return [...this.outgoing.keys()];
  }

  edgeCount() {
    //TODO
    let total = 0;
    // this.outgoing.forEach((value, key, map) => {
    //   total += this.outgoing.get(GraphNode);
    // });
    total += [...this.outgoing.values()].length;

    if (this.isDirected) return total;
    return total / 2;
  }

  edges() {
    let edges = new Set();

    this.outgoing.forEach(neighbor => {
      neighbor.forEach(edge => {
        edges.add(edge);
      });
    });
    // Object.values(this.outgoing).forEach(neighbor => {
    //   Object.values(neighbor).forEach(edge => {
    //     edges.add(edge);
    //   });
    // });

    return [...edges];
  }

  endpoints() {}

  /**
   *
   * @param {GraphNode} node
   * @param {GraphNode} neighbor
   * @returns Edge
   */
  getEdge(node, neighbor) {
    // return this.outgoing[u][v];
    try {
      return this.outgoing.get(node).get(neighbor);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  opposite(v) {}

  // degree(v, outgoing = true) {
  //   let adj = outgoing ? this.outgoing : this.incoming

  // }

  // incident_edges(v, out = true) {}

  insertNode(x = null) {
    let n = new GraphNode(x);
    this.outgoing.set(n, new Map());
    if (this.isDirected) this.incoming.set(n, new Map());
    // this.outgoing[n] = {};
    // if (this.directed) this.incoming[n] = {};
    return n;
  }

  remove_vertex(x) {}

  /**
   * Insert and return a new edge from u to v with auxiliary element x
   * @param {GraphNode} u
   * @param {GraphNode} v
   * @param {*} x
   */
  insertEdge(u, v, x = null) {
    let e = new Edge(u, v, x);
    let neighbor = new Map();
    neighbor.set(v, e);
    this.outgoing.set(u, neighbor);

    let oppositeNeighbor = new Map();
    oppositeNeighbor.set(u, e);
    this.incoming.set(v, oppositeNeighbor);
    return e;
  }

  remove_edge(e) {}
}

module.exports = Graph;
