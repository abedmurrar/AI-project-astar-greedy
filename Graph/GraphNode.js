const hash = require("object-hash");

class GraphNode {
  /**
   * @constructor
   * @param {String} name
   */
  constructor(name) {
    this.name = name;
    this.timestamp = Date.now();
  }

  toString() {
    return hash(this, { algorithm: "md5", encoding: "base64" });
  }
}

module.exports = GraphNode;
