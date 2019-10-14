const GraphNode = require('./GraphNode');
const Edge = require('./Edge');

class Graph {
    constructor() {
        // class attributes
        this.outgoing = new Map();

        // bind this
        this.edgeCount = this.edgeCount.bind(this);
        this.edges = this.edges.bind(this);
        this.getEdge = this.getEdge.bind(this);
        this.insertNode = this.insertNode.bind(this);
        this.removeNode = this.removeNode.bind(this);
        this.insertEdge = this.insertEdge.bind(this);
        this.getNodeByCoordinates = this.getNodeByCoordinates.bind(this);
    }

    get nodesCount() {
        return this.outgoing.size;
    }

    get nodes() {
        return [...this.outgoing.keys()];
    }

    edgeCount() {
        let total = 0;
        let maps = [...this.outgoing.values()];
        maps.forEach(map => {
            total += map.size;
        });
        return total / 2;
    }

    edges() {
        let edges = new Set();
        this.outgoing.forEach(neighbor => {
            neighbor.forEach(edge => {
                edges.add(edge);
            });
        });
        return [...edges];
    }

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

    /**
     *
     * @param {String} name
     * @param {Number} x
     * @param {Number} y
     */
    insertNode(x, y, name = null) {
        let n = new GraphNode(name, x, y);
        this.outgoing.set(n, new Map());
        // this.outgoing[n] = {};
        // if (this.directed) this.incoming[n] = {};
        return n;
    }

    removeNode(x) {
        if (this.outgoing.has(x)) {
            return this.outgoing.delete(x);
        }
        return false;
    }

    /**
     * Insert and return a new edge from u to v with auxiliary element x
     * @param {GraphNode} u
     * @param {GraphNode} v
     * @param {*} x
     */
    insertEdge(u, v, x = null) {
        let e = new Edge(u, v, x);
        let neighbor = new Map();
        let oppositeNeighbor = new Map();
        neighbor.set(v, e);
        oppositeNeighbor.set(u, e);
        this.outgoing.set(u, neighbor);
        this.outgoing.set(v, oppositeNeighbor);
        return e;
    }

    getNodeByCoordinates(x, y) {
        let nodes = this.outgoing.entries();
        let iterator = nodes.next();

        while (iterator.done != false) {
            if (iterator.value[0].x === x && iterator.value[0].y === y) {
                return iterator.value[0];
            }
        }

        return null;
    }
}

module.exports = Graph;
