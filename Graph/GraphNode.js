const hash = require('object-hash');

class GraphNode {
    /**
     * @constructor
     * @param {String} name
     */
    constructor(name, x, y) {
        // class attributes
        this.name = name;
        this.x = x;
        this.y = y;
        this.timestamp = Date.now();

        // bind this
        this.toString = this.toString.bind(this);
    }

    toString() {
        return hash(this, { algorithm: 'md5', encoding: 'base64' });
    }
}

module.exports = GraphNode;
