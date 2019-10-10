const hash = require('object-hash');

class GraphNode {
    /**
     * @constructor
     * @param {String} name
     */
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.timestamp = Date.now();
    }

    toString() {
        return hash(this, { algorithm: 'md5', encoding: 'base64' });
    }
}

module.exports = GraphNode;
