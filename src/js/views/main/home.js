define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/main/home.html"
    ],
    function( Backbone, _, HomeTmpl ){
        var MainHomeView = Backbone.View.extend({
            "template": _.template( HomeTmpl ),

            "render": function(){
                console.log( this.$el );
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                console.log( "home rendering" );
                this.render();
            }
        });

        return MainHomeView;
    }
);
