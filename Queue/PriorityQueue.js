const QueueNode = require("./QueueNode");
// eslint-disable-next-line no-unused-vars
const { GraphNode } = require("../Graph");

class PriorityQueue {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  /**
   *
   * @param {GraphNode} graphNode
   * @param {Number} priority
   * @returns QueueNode
   */
  enqueue(graphNode, priority) {
    let newNode = new QueueNode(graphNode, priority);

    // If Empty
    if (this.isEmpty()) {
      this.head = newNode;
      this.size += 1;
      return this.head;
    }

    // If smaller than head
    if (this.head.priority > newNode.priority) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.size += 1;
      return newNode;
    }

    // If more than 1
    let traversal = this.head;
    let temp = null;
    while (traversal != null) {
      if (newNode.priority < traversal.priority) {
        newNode.next = traversal;
        traversal.previous.next = newNode;
        break;
      }
      temp = traversal;
      traversal = traversal.next;
    }

    //If nothing worked then add to last
    temp.next = newNode;

    this.size += 1;
    return newNode;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const popped = this.head;
      this.head = this.head.next;
      this.size -= 1;
      return popped;
    } else {
      console.error("Queue is empty!");
      return null;
    }
  }

  isEmpty() {
    return this.size === 0 && this.head == null;
  }
}

module.exports = PriorityQueue;
