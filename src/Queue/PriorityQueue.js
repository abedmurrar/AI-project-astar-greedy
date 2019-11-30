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
     * @param {Number} priority
     * @returns QueueNode
     */
    enqueue(graphNode, priority) {
        if (this.has(graphNode)) {
            return;
        }
        let newNode = new QueueNode(graphNode, priority);

        // If Empty
        if (this.isEmpty()) {
            this.head = newNode;
            this.size += 1;
            return this.head;
        }

        // If smaller than head

        // if (this.size === 1) {
        //     if (newNode.priority < this.head.priority) {
        //         this.head.previous = newNode;
        //         newNode.next = this.head;
        //         this.head = newNode;
        //     } else {
        //         this.head.next = newNode;
        //     }
        //     this.size += 1;
        //     return newNode;
        // }

        // If more than 1
        let traversal = this.head;

        let temp = null;
        console.log(this.head == null);
        console.log(this.size);

        while (traversal != null) {
            temp = traversal;
            if (newNode.priority <= traversal.priority) {
                newNode.next = traversal;
                if (traversal.previous != null) {
                    traversal.previous.next = newNode;
                    newNode.previous = traversal.previous;
                    traversal.previous = newNode;
                } else {
                    traversal.previous = newNode;
                    this.head = newNode;
                }
                this.size += 1;
                return newNode;
            }
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
            console.error('Queue is empty!');
            return null;
        }
    }

    isEmpty() {
        return this.size === 0 && this.head == null;
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
            traversal = traversal.previous;
        }
    }
}

module.exports = PriorityQueue;
