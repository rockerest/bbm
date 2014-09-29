define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/chrome/navigation.html"
    ],
    function( Backbone, _, NavTmpl ){
        var NavigationView = Backbone.View.extend({
            "template": _.template( NavTmpl ),

            "render": function(){
                console.log( this.$el );
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                console.log( "rendering nav" );
                this.render();
            }
        });

        return NavigationView;
    }
);
