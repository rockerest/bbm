define(
    ["backbone", "underscore", "text!templates/navigation.html"],
    function( Backbone, _, NavTmpl ){
        var Bbm = Backbone.View.extend({
            "el": "#application nav",
            "template": _.template( NavTmpl ),

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
