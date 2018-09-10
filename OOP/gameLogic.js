"use strict";
/*jslint latedef:false*/
function Cell(isAlive, x, y) {
    this.isAlive = false;
    this.x = x;
    this.y = y;
}
/**
 * returns a symbol representing the current state of this cell.
 * 
 * @returns {String}
 */
Cell.prototype.toSymbol = function() {
    return this.isAlive ? "X" : "_";
};

/**
 * the grid. 
 * start coordinates are (0,0) in the upper left corner (y-axis goes down from here).
 * The grid has a frame (width: 1 cell) that is always dead. 
 * 
 * The value of a cell is either dead or alive. 
 * The grid will be initialized with all cells set to dead.
 * 
 * @param {type} width
 * @param {type} height
 * @returns {Grid}
 */
function Grid(width, height) {
    this.width = width;
    this.height = height;
    this.iteration = 0;
    this.cells = new Array(width);
    // init cells with 0.
    for (var i = 0; i < width; i++) {
        this.cells[i] = new Array(height);        
        for (var j = 0; j < height; j++) {
            this.cells[i][j] = new Cell(false, i, j);
        }
    }
    /**
     * an array of cells whos state is to be flipped at the end of a step.
     */
    this.cellsToFLip = new Array();
    /**
     * list of currently alive cells. for faster draw.
     */
    this.aliveCells = new Array();
}
Grid.prototype.revive = function(x, y) {
    if (x <= 0  || y <= 0 || x >= this.width - 1 || y >= this.height - 1) {
        return; // frame of 1 dead cell
    }
    this.cells[x][y].isAlive = true;
    this.aliveCells.push(this.cells[x][y]); // add to alive list
};
Grid.prototype.kill = function(x, y) {
    this.cells[x][y].isAlive = false;
    for (var i = 0; i < this.aliveCells.length; i++) { // remove from alive list
        if (this.aliveCells[i] == this.cells[x][y]) { // same cell?
            this.aliveCells.splice(i, 1); // remove cell
        }
    }
};
/**
 * sets all cells to dead.
 */
Grid.prototype.reset = function() {
    for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
            this.kill(i, j);
        }
    }
    this.iteration = 0;
};
/**
 * internal function. Marks the cell at given coordinates so it will be flipped
 * at the end of a step.
 */
Grid.prototype.markForFlip = function(cell) {
    this.cellsToFLip.push(cell);
};
/**
 * internal function. Flips the state of all cells (dead -> alive; alive -> dead) in cellsToFLip.
 */
Grid.prototype.applyFlip = function() {
    for (var i = 0; i < this.cellsToFLip.length; i++) {
        var currentCell = this.cellsToFLip[i];
        if (currentCell.isAlive) {
            this.kill(currentCell.x, currentCell.y);
        } else {
            this.revive(currentCell.x, currentCell.y);
        }
    }
};
Grid.prototype.step = function() {
    this.cellsToFLip = new Array();
    this.iteration++; // how often step was called

    for (var i = 1; i < this.width - 1; i++) { // we have a frame of 1 that is always dead (saves bound check)
        for (var j = 1; j < this.height - 1; j++) {
            var currentCell = this.cells[i][j];
            var aliveNeighborCount = 0;
            // check each adjacent cell
            for (var ii = i - 1; ii <= i + 1; ii++) {
                for (var jj = j - 1; jj <= j + 1; jj++) {
                    if (this.cells[ii][jj] != currentCell // don't count current cell
                            && this.cells[ii][jj].isAlive) {
                        aliveNeighborCount++;
                    }
                }
            }

            if (currentCell.isAlive
                    && (aliveNeighborCount < 2 || aliveNeighborCount > 3)) {
                // cell is alive and has less than 2 or more than 3 alive neighbors. 
                // kill it
                this.markForFlip(currentCell);

            } else if (!currentCell.isAlive && aliveNeighborCount === 3) {
                // cell is dead. revive it cell
                this.markForFlip(currentCell);
            }
        }
    }
    this.applyFlip();
};
Grid.prototype.toString = function() {
    var output = "";
    // print row by row
    for (var j = 0; j < this.height; j++) {
        for (var i = 0; i < this.width; i++) {
            if (this.cells[i][j].isAlive) {
                output += this.cells[i][j].toSymbol();
            } else {
                output += this.cells[i][j].toSymbol();
            }
        }
        output += "<br/>";
    }
    return output;
};