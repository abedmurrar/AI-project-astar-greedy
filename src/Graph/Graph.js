const GraphNode = require('./GraphNode');
const Edge = require('./Edge');
const _ = require('underscore');

class Graph {
    constructor() {
        // class attributes
        this.adj = {};
        this.nodes = {};
        this.edges = {};
        // bind this
        this.getEdge = this.getEdge.bind(this);
        this.insertNode = this.insertNode.bind(this);
        this.removeNode = this.removeNode.bind(this);
        this.insertEdge = this.insertEdge.bind(this);
        // this.getNodeByCoordinates = this.getNodeByCoordinates.bind(this);
    }

    get nodeCount() {
        return _.keys(this.nodes).length;
    }

    get edgeCount() {
        return _.keys(this.edges).length;
    }

    /**
     *
     * @param {GraphNode} node
     * @param {GraphNode} neighbor
     * @returns {Edge}
     */
    getEdge(node, neighbor) {
        try {
            return this.edges[this.adj[node][neighbor]];
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
        this.nodes[n] = n;
        this.adj[n] = {};
        return n;
    }

    /**
     *
     * @param {GraphNode} x
     */
    removeNode(x) {
        if (_.contains(this.nodes, x)) {
            this.nodes = _.omit(this.nodes, x.toString());
            this.adj = _.omit(this.adj, x.toString());
            Object.values(this.adj).forEach(neighbor=>{
                _.omit(neighbor, x.toString());
            })
            return true;
        }
        return false;
    }

    /**.toString
     * Insert and return a new edge from u to v with auxiliary element x
     * @param {GraphNode} u
     * @param {GraphNode} v
     * @param {*} x
     */
    insertEdge(u, v, x = null) {
        let e = new Edge(u, v, x);
        this.edges[e.toString()] = e;

        if (u in this.nodes && v in this.nodes) {
            this.adj[u][v] = e.toString();
            this.adj[v][u] = e.toString();
        } else {
            throw Error('Nodes do not exist in graph wtf');
        }
        return e;
    }

    // getNodeByCoordinates(x, y) {
    //     let nodes = this.outgoing.entries();
    //     let iterator = nodes.next();

    //     while (iterator.done != false) {
    //         if (iterator.value[0].x === x && iterator.value[0].y === y) {
    //             return iterator.value[0];
    //         }
    //     }

    //     return null;
    // }
}

module.exports = Graph;
