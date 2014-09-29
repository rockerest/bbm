define(
    ["utilities"],
    function( Utilities ){
        var Region = function( node ){
            this.output = node;
            this.view = undefined;
        };

        Region.prototype.assignView = function( view ){
            view.extend( { "el": this.output } );
            this.view = view;
        };

        Region.prototype.render = function( data ){
            return new this.view( data );
        };

        // Allow short-circuit to show a view
        Region.prototype.show = function( view, viewData ){
            this.assignView( view );
            this.render( viewData );
        };

        return Region;
    }
);
