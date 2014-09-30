define(
    ["underscore", "bases/layout", "utilities"],
    function( _, Layout, Utilities ){
        var Region = function( parent, selector ){
            this.output = parent.find( selector );
            this.renderable = undefined;
        };

        Region.prototype.assignRenderable = function( renderable ){
            renderable.prototype.el = this.output;

            this.renderable = renderable;
        };

        Region.prototype.render = function( data ){
            new this.renderable( data );
        };

        // Allow short-circuit to show a renderable
        Region.prototype.show = function( renderable, viewData ){
            this.assignRenderable( renderable );
            this.render( viewData );
        };

        return Region;
    }
);
