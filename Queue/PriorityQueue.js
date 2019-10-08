const QueueNode = require("./QueueNode");
const { GraphNode } = require("../Graph");

class PriorityQueue {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  /**
   *
   * @param {GraphNode} graphNode
   * @returns QueueNode
   */
  enqueue(graphNode) {
    if (this.size === 0) {
      this.head = new QueueNode(graphNode);
      return this.head;
    }

    let newNode = new QueueNode(graphNode);
    let traversal = this.head;
    while (traversal.next != null) {
      if (traversal.element.distance > newNode.element.distance) {
        let tempNext = traversal.next;
        traversal.next = newNode;
        newNode.next = tempNext;
      }
      break;
    }

    this.size += 1;
  }

  dequeue() {
    const popped = this.head;

    this.size -= 1;
  }

  isEmpty() {
    return this.size === 0 && head == null;
  }
}

module.exports = PriorityQueue;
