define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/main/home.html"
    ],
    function(
        Backbone, _,
        tmpl
    ){
        var MainHomeView = Backbone.View.extend({
            "template": _.template( tmpl ),

            "render": function(){
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                this.render();
            }
        });

        return MainHomeView;
    }
);
