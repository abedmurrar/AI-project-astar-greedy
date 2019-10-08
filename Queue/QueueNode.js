const { GraphNode } = require("../Graph");

class QueueNode {
  /**
   * @constructor
   * @param {GraphNode} element
   * @param {Number} priority
   * @param {QueueNode} next
   */
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

module.exports = QueueNode;