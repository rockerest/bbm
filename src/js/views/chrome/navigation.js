define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/chrome/navigation.html"
    ],
    function(
        Backbone, _,
        tmpl
    ){
        var NavigationView = Backbone.View.extend({
            "template": _.template( tmpl ),

            "render": function(){
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                this.render();
            }
        });

        return NavigationView;
    }
);
