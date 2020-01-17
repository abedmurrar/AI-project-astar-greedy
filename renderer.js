/* eslint-disable no-unused-vars */
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { Graph: g, GraphNode, Edge } = require('./src/Graph');
const astar = require('./src/Algorithms/A_Star');
let graph = new g();

let staffordNode = graph.insertNode(519, 108, 'Stafford');
let pankridgeNode = graph.insertNode(523, 206, 'Pankridge');
let gnosallNode = graph.insertNode(424, 133, 'Gnosall');
let yarnfieldNode = graph.insertNode(467, 10, 'Yarnfield');
let wolverhamptonNode = graph.insertNode(508, 369, 'Wolverhampton');
let donningtonNode = graph.insertNode(287, 214, 'Donnington');
let cosfordNode = graph.insertNode(394, 301, 'Cosford');
let bridgnorthNode = graph.insertNode(300, 435, 'Bridgnorth');
let stourbridgeNode = graph.insertNode(496, 527, 'Stourbridge');
let walsallNode = graph.insertNode(623, 372, 'Walsall');
let westBromwichNode = graph.insertNode(615, 451, 'West Bromwich');
let telfordNode = graph.insertNode(287, 264, 'Telford');
let shrewsburyNode = graph.insertNode(57, 226, 'Shrewsbury');
let kidderminsterNode = graph.insertNode(426, 611, 'Kidderminster');
let briminghamNode = graph.insertNode(685, 489, 'Brimingham');
let bromsgroveNode = graph.insertNode(567, 675, 'Bromsgrove');
let rednalNode = graph.insertNode(612, 605, 'Rednal');

/* Stafford */
let e1 = graph.insertEdge(staffordNode, pankridgeNode, 9.173);
let e2 = graph.insertEdge(staffordNode, gnosallNode, 11.43);
let e3 = graph.insertEdge(staffordNode, yarnfieldNode, 13.35);
/* Pankridge */
let e4 = graph.insertEdge(pankridgeNode, wolverhamptonNode, 16.1);
/* Gnosall */
let e5 = graph.insertEdge(gnosallNode, donningtonNode, 16.1);
/* Wolverhamption */
let e6 = graph.insertEdge(wolverhamptonNode, cosfordNode, 14.32);
let e7 = graph.insertEdge(wolverhamptonNode, bridgnorthNode, 24.14);
let e8 = graph.insertEdge(wolverhamptonNode, stourbridgeNode, 17.54);
let e9 = graph.insertEdge(wolverhamptonNode, walsallNode, 10.46);
let e10 = graph.insertEdge(wolverhamptonNode, westBromwichNode, 13.67);
/* Donnington */
let e11 = graph.insertEdge(donningtonNode, telfordNode, 5.632);
/* Cosford */
let e12 = graph.insertEdge(cosfordNode, telfordNode, 13.67);

/* Bridgenorth */
let e13 = graph.insertEdge(bridgnorthNode, telfordNode, 20.92);
let e14 = graph.insertEdge(bridgnorthNode, shrewsburyNode, 34.6);

/* Stourbridge */
let e15 = graph.insertEdge(stourbridgeNode, bridgnorthNode, 24.3);
let e16 = graph.insertEdge(stourbridgeNode, kidderminsterNode, 11.265);
let e17 = graph.insertEdge(stourbridgeNode, briminghamNode, 20.68);

/* Walsall */
let e18 = graph.insertEdge(walsallNode, westBromwichNode, 9.33);
let e19 = graph.insertEdge(walsallNode, briminghamNode, 14.162);

/* West Bromwich */
let e20 = graph.insertEdge(westBromwichNode, briminghamNode, 9.173);

/* Telford */
let e21 = graph.insertEdge(telfordNode, shrewsburyNode, 25.75);
/* Kidderminster */
let e22 = graph.insertEdge(kidderminsterNode, bromsgroveNode, 15.45);

/* Brimingham */
let e23 = graph.insertEdge(briminghamNode, rednalNode, 14.48);

/* Bromsgrove */
let e24 = graph.insertEdge(bromsgroveNode, rednalNode, 8.7);

let from_node_select = $('#from_node');
let to_node_select = $('#to_node');

fillSelect(from_node_select);
fillSelect(to_node_select);

let run_algorithm_button = $('#start-algorithm');
run_algorithm_button.click(function() {
    const value_a = $('#from_node').val();
    const value_b = $('#to_node').val();
    let k = astar(graph, graph.nodes[value_a], graph.nodes[value_b], false);
    console.log(k);
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(k.x, k.y);
    let parent = k.p;
    while (parent != null) {
        ctx.lineTo(parent.x, parent.y);
        parent = parent.p;
    }
    ctx.stroke();
    console.log(graph);
});

function fillSelect(element) {
    for (const hash in graph.nodes) {
        let option = document.createElement('option');
        option.value = hash;
        option.innerText = graph.nodes[hash].name;
        element.append(option);
    }
}

from_node_select.change(event => {
    for (const option of document.querySelectorAll('#to_node option')) {
        if (option.value === event.target.value) {
            option.setAttribute('disabled', true);
        } else {
            option.removeAttribute('disabled');
        }
    }
});

to_node_select.change(event => {
    for (const option of document.querySelectorAll('#from_node option')) {
        if (option.value === event.target.value) {
            option.setAttribute('disabled', true);
        } else {
            option.removeAttribute('disabled');
        }
    }
});

window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    // let img = document.querySelector('img');
    // var img = document.getElementById('lel');
    let imageObj = new Image();
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    imageObj.onload = function() {
        ctx.canvas.width = imageObj.width;
        ctx.canvas.height = imageObj.height;
        ctx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);
    };
    imageObj.src = 'Map.png';

    // img.src = 'Map.png';
    // ctx.drawImage(img, img.clientHeight + 20, img.clientWidth + 20);
};
