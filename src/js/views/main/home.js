define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/main/home.html"
    ],
    function( Backbone, _, HomeTmpl ){
        var Bbm = Backbone.View.extend({
            "el": "#main",
            "template": _.template( HomeTmpl ),

            "render": function(){
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                this.render();
            }
        });

        return Bbm;
    }
);
