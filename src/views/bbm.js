define(
    ["backbone", "underscore", "views/home", "views/navigation", "text!templates/bbm.html"],
    function( Backbone, _, HomeView, NavView, BbmTmpl ){
        var Bbm = Backbone.View.extend({
            "el": "#application",
            "template": _.template( BbmTmpl ),

            "render": function(){
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                this.render();

                new NavView();
                new HomeView();
            }
        });

        return Bbm;
    }
);
