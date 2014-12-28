/**
 * Create a new visitor
 * @alias Visitor
 * @class
 * @classdesc A circle that visits GridCells on the game grid.
 * @param {int} x The x position in the grid for the new Visitor.
 * @param {int} y The y position in the grid for the new Visitor.
 */
Automatune.Visitor = function(x, y) {
    /**
     * The DOM Element that visually represents this Visitor.
     * @public
     * @type {HTMLElement}
     */
    this.domElement;
    
    /**
     * The current grid position of this Visitor.
     * @public
     * @type {Object}
     */
    this.pos = {x: x, y: y};
    
    /**
     * Appends this Visitor to a GridCell.
     * @public
     * @param {GridCell} gridCell The GridCell to append this Visitor to.
     */
    this.appendTo = function(gridCell) {
        
    };
    
    /**
     * Steps this Visitor forward, sending it on its way to the next grid cell.
     * @private
     */
    this.update = function() {
        
    };
};
