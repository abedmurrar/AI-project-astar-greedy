const hash = require("object-hash");

class GraphNode {
  /**
   * @constructor
   * @param {*} element
   */
  constructor(newElement) {
    this.element = newElement;
    this.timestamp = Date.now();
  }

  getElement() {
    return this.element;
  }

  setElement(newElement) {
    this.element = newElement;
  }

  toString() {
    return hash(this, { algorithm: "md5", encoding: "base64" });
  }
}

module.exports = GraphNode;
