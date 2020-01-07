const hash = require('object-hash');
const _ = require('underscore');
// eslint-disable-next-line no-unused-vars
const Node = require('./GraphNode');

class Edge {
    /**
     *
     * @param {Node} from
     * @param {Node} to
     * @param {Number} distance
     */

    constructor(from, to, distance) {
        // class attributes
        this.origin = from;
        this.destination = to;
        this.cost = distance;
        this.timestamp = Date.now();

        // bind this
        this.opposite = this.opposite.bind(this);
        this.toString = this.toString.bind(this);
    }

    /**
     * Returns [from,to] array for Graph nodes u and v for this edge
     */
    get endpoints() {
        return [this.origin, this.destination];
    }

    /**
     * Returns the graph node that is opposite v on this edge
     * @param {Node} v
     */
    opposite(v) {
        if (_.isEqual(v, this.origin)) return this.destination;
        return this.origin;
    }

    /**
     * Returns the element associated with this edge
     */
    get element() {
        return this.element;
    }

    toString() {
        return hash(
            {
                origin: this.origin,
                destination: this.destination,
                cost: this.cost,
                timestamp: this.timestamp
            },
            { algorithm: 'md5', encoding: 'base64' }
        );
    }
}

module.exports = Edge;
