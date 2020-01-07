// eslint-disable-next-line no-unused-vars
const { Graph, GraphNode } = require('../Graph');
const { PriorityQueue } = require('../Queue');
const _ = require('underscore');
const distance = require('euclidean-distance');

const KILOMETER_PIXEL_RATIO = 10 / 106; // 10km for every 106 pixel on image

/**
 *
 * @param {Graph} graph
 * @param {GraphNode} start
 * @param {GraphNode} goal
 */
function Astar(graph, start, goal, isGreedy = false) {
    let frontier = new PriorityQueue();
    let explored = new Set();

    frontier.enqueue(start, null, heuristic(start, goal));

    while (!frontier.isEmpty()) {
        let { element: current } = frontier.dequeue();
        explored.add(current);

        if (distance([current.x, current.y], [goal.x, goal.y]) === 0) {
            return current;
            // return current;
            // change it to return all route
        }

        for (const neighbor in graph.adj[current]) {
            let neighborNode = graph.nodes[neighbor];
            let edge = graph.getEdge(current, neighborNode);
            if (!frontier.has(neighborNode) && !explored.has(neighborNode)) {
                frontier.enqueue(
                    neighborNode,
                    current,
                    heuristic(current, neighborNode) * KILOMETER_PIXEL_RATIO +
                        (!isGreedy && edge.cost)
                );
            }
        }
    }

    return false;
}

/**
 *
 * @param {GraphNode} state
 * @param {GraphNode} goal
 */

function heuristic(state, goal) {
    return distance([state.x, state.y], [goal.x, goal.y]);
}

module.exports = Astar;
