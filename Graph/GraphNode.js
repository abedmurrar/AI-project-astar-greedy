const hash = require("object-hash");

class GraphNode {
  /**
   * @constructor
   * @param {Number} distance
   */
  constructor(distance) {
    this.distance = distance;
    this.timestamp = Date.now();
  }

  toString() {
    return hash(this, { algorithm: "md5", encoding: "base64" });
  }
}

module.exports = GraphNode;
