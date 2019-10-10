const { GraphNode } = require('../Graph');
const { PriorityQueue } = require('../Queue');
const _ = require('underscore');
/**
 *
 * @param {Graph} graph
 * @param {GraphNode} start
 * @param {GraphNode} goal
 */
function Astar(start, goal) {
    let frontier = new PriorityQueue();
    let explored = new Set();

    while (!frontier.isEmpty()) {
        let state = frontier.pop();
        explored.add(state);

        if (_.isEqual(state, goal)) {
            return state;
        }

        // for(neighbor in state.)
    }
}

module.exports = Astar;
