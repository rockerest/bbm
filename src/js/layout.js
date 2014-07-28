define(
    ["backbone", "underscore"],
    function( Backbone, _ ){
        var Layout = function(){};

        Layout.prototype.build = function( data ){
            return Backbone.View.extend({
                "el": this.output,
                "template": this.template,

                "render": function(){
                    this.$el.html( this.template( data ) );
                    return this;
                },

                "initialize": function(){
                    this.render();
                }
            });
        };

        return Layout;
    }
);
