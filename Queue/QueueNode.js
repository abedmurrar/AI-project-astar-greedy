// eslint-disable-next-line no-unused-vars
const { GraphNode } = require('../Graph');

class QueueNode {
    /**
     * @constructor
     * @param {GraphNode} element
     * @param {Number} priority
     * @param {QueueNode} next
     * @param {QueueNode} previous
     */
    constructor(element, priority, next = null, previous = null) {
        this.element = element;
        this.priority = priority;
        this.next = next;
        this.previous = previous;
    }
}

module.exports = QueueNode;
