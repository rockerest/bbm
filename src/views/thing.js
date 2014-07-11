define(
    ["backbone", "underscore", "text!templates/thing.html"],
    function( Backbone, _, ThingTmpl ){
        var Thing = Backbone.View.extend({
            "el": "#application .main",
            "template": _.template( ThingTmpl ),

            "render": function(){
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                this.render();
            }
        });

        return Thing;
    }
);
