// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { Graph: g, GraphNode, Edge } = require('./src/Graph');
let graph = new g();
let gnA = graph.insertNode(1, 1, 'A');
let gnB = graph.insertNode(2, 3, 'B');
let gnC = graph.insertNode(3, 3, 'C');
let gnD = graph.insertNode(4, 4, 'D');
let gnE = graph.insertNode(5, 5, 'E');
let gnF = graph.insertNode(6, 6, 'F');
let gnG = graph.insertNode(7, 7, 'G');
let e1 = graph.insertEdge(gnA, gnB, 1);
let e2 = graph.insertEdge(gnA, gnF, 939);
let e3 = graph.insertEdge(gnB, gnG, 229);
let e4 = graph.insertEdge(gnB, gnE, 743);
let e5 = graph.insertEdge(gnB, gnD, 1);
let e6 = graph.insertEdge(gnB, gnC, 813);
let e7 = graph.insertEdge(gnC, gnE, 735);
let e8 = graph.insertEdge(gnD, gnE, 194);
let e9 = graph.insertEdge(gnE, gnF, 666);
let e10 = graph.insertEdge(gnF, gnG, 500);

// console.log(astar(graph,gnA,gnD, true))

let from_node_select = $('#from_node')
let to_node_select = $('#to_node')

fillSelect(from_node_select);
fillSelect(to_node_select);

let run_algorithm_button = $('#start-algorithm')
run_algorithm_button.click(function(){
    alert('kawto')
})


function fillSelect(element) {
    for (const hash in graph.nodes) {
        let option = document.createElement('option');
        option.value = hash;
        option.innerText = graph.nodes[hash].name;
        element.append(option);
    }
}
