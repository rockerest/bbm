define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!vw/chrome/sidebar.html"
    ],
    function(
        Backbone, _,
        tmpl
    ){
        var SidebarView = Backbone.View.extend({
            "template": _.template( tmpl ),

            "render": function(){
                this.$el.html( this.template() );
                return this;
            },

            "initialize": function(){
                this.render();
            }
        });

        return SidebarView;
    }
);
