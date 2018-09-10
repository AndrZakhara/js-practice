"use strict";
/*jslint latedef:false*/
var cellHeight = 20; // px height and width of cell when drawn
var gridWidth = 30;  // width of grid in cells
var gridHeight = 20; // height of grid in cells
var updateTimeMs = 500;

var grid = new Grid(gridWidth, gridHeight);
var canvas = document.getElementById('out2');
var intervalId; // id of interval, used to clear it

loadSettings();

/*
 * load and apply settings. This resets the grid.
 */
function loadSettings() {
    // load settings
    updateTimeMs = document.getElementById('speed').value;
    gridHeight = document.getElementById('height').value;
    gridWidth = document.getElementById('width').value;
    cellHeight = document.getElementById('cellHeight').value;

    // apply settings
    grid = new Grid(gridWidth, gridHeight);

    canvas.width = gridWidth * cellHeight;
    canvas.height = gridHeight * cellHeight;
    reset();    
}

/**
 * call on mouse click or drag. Will spawn a cell at coordinates of mouse event
 * or kill a cell if shift is pressed.
 */
function input(event) {
    var coords = getMousePos(canvas, event);
    var x = toInteger(coords.x / cellHeight) - 1;
    var y = toInteger(coords.y / cellHeight) - 1;

    if (event.shiftKey) {
        if (grid.cells[x][y].isAlive) {
            grid.kill(x, y);
            draw(); // only draw on change
        } 
    } else {
        if (!grid.cells[x][y].isAlive) {
            grid.revive(x, y);
            draw(); // only draw on change
        }
    }
}

/**
 * get position of mouse event relative to given canvas.
 */
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function reset() {
    grid.reset();
    running = false;
    clearInterval(intervalId);
    draw();
}

var running = false;
var iterations = document.getElementById('out');
function start() {
    if (!running) {
        running = true;
        intervalId = setInterval(function() {
            grid.step();
            draw();
            iterations.innerHTML = grid.iteration;
        }, updateTimeMs);
    }
}

function pause() {
    running = false;
    clearInterval(intervalId);
}

function draw() {
    if (canvas.getContext) {
        drawCanvas(canvas);
    } else {
        drawSimple(grid);
    }
}

/* 
 * alternativ ascii draw method in case canvas is not supported.
 */
function drawSimple() {
    var div = document.getElementById('out').innerHTML = grid.toString();
}

/*
 * draws grid to given canvas.
 */
function drawCanvas(canvas) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    context.strokeRect(0, 0, canvas.width, canvas.height); // draw frame
    for (var i = 0; i < grid.aliveCells.length; i++) {
        context.strokeRect(cellHeight * grid.aliveCells[i].x, cellHeight * grid.aliveCells[i].y,
                cellHeight, cellHeight);
    }
}

function toInteger(number) {
    return Math.ceil(number);
}