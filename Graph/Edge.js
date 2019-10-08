const hash = require("object-hash");
const _ = require("underscore");
const Node = require("./GraphNode");

class Edge {
  /**
   *
   * @param {Node} from
   * @param {Node} to
   * @param {Number} distance
   */

  constructor(from, to, distance) {
    this.origin = from;
    this.destination = to;
    this.cost = distance;
    this.timestamp = Date.now();
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
    return hash(this, { algorithm: "md5", encoding: "base64" });
  }
}

module.exports = Edge