define(
    ["backbone", "underscore", "bases/region"],
    function( Backbone, _, Region ){
        var Layout = function( options ){
            this.options = options;
            this.regions = {};
        };

        Layout.prototype.render = function(){
            var self = this,
                view = Backbone.View.extend({
                    "el": self.options.el,
                    "template": _.template( self.options.template ),

                    "render": function(){
                        this.$el.html( this.template() );
                        _( self.options.regions ).each( function( selector, name ){
                            self.regions[ name ] = new Region( selector );
                        });

                        return this;
                    },

                    "initialize": function(){
                        this.render();
                    }
                });

            return new view();
        };

        return Layout;
    }
);
