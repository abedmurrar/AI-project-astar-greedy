const QueueNode = require('./QueueNode');
// eslint-disable-next-line no-unused-vars
const { GraphNode } = require('../Graph');

/**
 * @class
 * @property {QueueNode} head
 * @property {Number} size
 */
class PriorityQueue {
    /**
     * @constructor
     */
    constructor() {
        // class attributes
        this.size = 0;
        /**
         * @type {QueueNode} head
         */
        this.head = null;

        // bind this
        this.enqueue = this.enqueue.bind(this);
        this.dequeue = this.dequeue.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
    }

    /**
     *
     * @param {GraphNode} graphNode
     * @param {GraphNode} parent
     * @param {Number} priority
     * @returns QueueNode
     */
    enqueue(graphNode, parent, priority) {
        if (this.has(graphNode)) {
            return;
        }
        let newNode = new QueueNode(Object.assign(graphNode, { p: parent }), priority);

        // If Empty
        if (this.isEmpty()) {
            this.head = newNode;
            this.size = 1;
            return this.head;
        }

        let temp = this.head;
        while (temp) {
            if (newNode.priority <= temp.priority) {
                newNode.next = temp;
                newNode.previous = temp.previous;
                if (!temp.previous) {
                    this.head = newNode;
                } else {
                    temp.previous.next = newNode;
                    temp.previous = newNode;
                }
                break;
            } else if (temp.next === null) {
                temp.next = newNode;
                newNode.previous = temp;
                break;
            } else {
                temp = temp.next;
            }
        }
        this.size += 1;
        return newNode;
    }

    dequeue() {
        if (!this.isEmpty()) {
            const popped = this.head;
            if (this.head && this.head.next) {
                this.head.next.previous = null;
            }
            this.head = this.head.next;

            this.size -= 1;
            return popped;
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    /**
     *
     * @param {GraphNode} node
     * @returns {Boolean}
     */
    has(node) {
        let traversal = this.head;

        while (traversal != null) {
            if (traversal.element == node) return true;
            traversal = traversal.next;
        }
        return false;
    }

    print() {
        let traversal = this.head;

        while (traversal != null) {
            console.log(`${traversal.element.name} ${traversal.priority}`);
            traversal = traversal.next;
        }
        console.log();
    }
}

module.exports = PriorityQueue;
