define(
    ["backbone", "underscore", "bases/region"],
    function( Backbone, _, Region ){
        var Layout = function( options ){
                this.options = options;
                this.regions = {};
            },
            createRegions;

        Layout.prototype.render = function(){
            var self = this,
                view = Backbone.View.extend({
                    "el": self.options.el,
                    "template": _.template( self.options.template ),

                    "render": function(){
                        this.$el.html( this.template() );
                        createRegions( self, self.options.regions, this.$el );

                        return this;
                    },

                    "initialize": function(){
                        this.render();
                    }
                });


            return new view();
        };

        createRegions = function( layout, regions, parent ){
            _( regions ).each( function( selector, name ){
                layout.regions[ name ] = new Region( parent, selector );
            });
        };

        return Layout;
    }
);
