define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/errors/default.html"
    ],
    function( Backbone, _, DefaultTmpl ){
        var Bbm = Backbone.View.extend({
            "el": "#main",
            "template": _.template( DefaultTmpl ),

            "render": function(){
                this.$el.html( this.template({ "route": this.failedRoute }) );
                return this;
            },

            "initialize": function( data ){
                this.failedRoute = data.route;
                this.render();
            }
        });

        return Bbm;
    }
);
