class QueueNode {
  /**
   * @constructor
   * @param {*} element
   * @param {Number} priority
   * @param {Node} next
   */
  constructor(element, priority = null, next = null) {
    this.element = element;
    this.priority = priority;
    this.next = next;
  }

  get element() {
    return this.element;
  }

  set element(newElement) {
    this.element = newElement;
  }

  get priority() {
    return this.priority;
  }

  /**
   * @param {Number} newPriority
   */
  set priority(newPriority) {
    this.priority = newPriority;
  }

  get next() {
    return this.next;
  }

  /**
   * @param {Node} newNext
   */
  set next(newNext) {
    this.next = newNext;
  }
}

module.exports = QueueNode;
