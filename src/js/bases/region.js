define(
    ["underscore"],
    function( _ ){
        var Region = function( parent, selector ){
            this.output = parent.find( selector );

            this._renderable = undefined;
        };

        Region.prototype.render = function(){
            this._renderable.prototype.el = this.output;

            var regionRenderable = new this._renderable(),
                layout;

            if( _( regionRenderable ).has( "_regions" ) ){
                regionRenderable.setElement( this.output );
                layout = regionRenderable.render();

                this.regions = layout.regions;
            }
        };

        Region.prototype.show = function( renderable ){
            this._renderable = renderable;

            this.render();
        };

        return Region;
    }
);
